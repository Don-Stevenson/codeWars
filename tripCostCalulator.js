import { createInterface } from "node:readline/promises"
import process, { stdin as input, stdout as output } from "node:process"
import fs from "node:fs"
import { execSync } from "node:child_process"

// The card issuer adds this foreign transaction fee to USD purchases
const CONVERSION_FEE = 0.025

const roundUp = (n, places) => Math.ceil(n * 10 ** places) / 10 ** places
const money = n => `$${n.toFixed(2)}`

// Bank of Canada's most recent USD -> CAD rate (no API key needed)
const fetchUsdCadRate = async () => {
  try {
    const res = await fetch(
      "https://www.bankofcanada.ca/valet/observations/FXUSDCAD/json?recent=1"
    )
    const data = await res.json()
    const obs = data.observations[0]
    return { rate: Number(obs.FXUSDCAD.v), date: obs.d }
  } catch (err) {
    console.error(err)
    return null
  }
}

// Accepts lines like "gas $42.25 USD" or "overnight parking 22.00 cad"
const parseExpense = line => {
  const match = line.match(/^(.+?)\s+\$?([\d,]+(?:\.\d+)?)\s*(usd|cad)?$/i)
  if (!match) return null
  return {
    description: match[1].trim(),
    amount: Number(match[2].replace(/,/g, "")),
    currency: (match[3] || "CAD").toUpperCase(),
  }
}

const rl = createInterface({ input, output })
const lineReader = rl[Symbol.asyncIterator]()

// Ask a question and wait for the next line (works typed or piped in)
const ask = async question => {
  output.write(question)
  const { value, done } = await lineReader.next()
  if (done) {
    console.log("\nInput ended early, nothing saved.")
    process.exit(1)
  }
  return value.trim()
}

const clientName = await ask("Who is the client? ")
const driveDates = await ask(
  "What dates were driven? (e.g. 2026-10-25 to 2026-10-26) "
)

console.log(
  '\nEnter expenses one per line, e.g. "gas $42.25 USD" or "parking 22.00 CAD".'
)
console.log(
  "Currency defaults to CAD. Press Enter on a blank line when done.\n"
)

const expenses = []
while (true) {
  const line = await ask(`Expense ${expenses.length + 1}: `)
  if (!line) break
  const expense = parseExpense(line)
  if (!expense) {
    console.log('  Could not read that. Try: "description amount USD|CAD"')
    continue
  }
  expenses.push(expense)
}

let rate = 1
if (expenses.some(e => e.currency === "USD")) {
  const liveRate = await fetchUsdCadRate()
  const suggestedRate = liveRate ? roundUp(liveRate.rate, 2) : null
  const prompt = liveRate
    ? `USD -> CAD rate [${suggestedRate}, Bank of Canada ${liveRate.date}]: `
    : "USD -> CAD exchange rate (e.g. 1.39): "
  while (true) {
    const answer = await ask(prompt)
    if (!answer && suggestedRate) {
      rate = suggestedRate
      break
    }
    if (Number(answer) > 0) {
      rate = roundUp(Number(answer), 2)
      break
    }
    console.log("  Please enter a number like 1.39")
  }
}

rl.close()

// Convert each expense to CAD; USD gets exchange rate plus the conversion fee
const lines = expenses.map(e => {
  const cad =
    e.currency === "USD"
      ? Math.round(e.amount * rate * (1 + CONVERSION_FEE) * 100) / 100
      : e.amount
  return { ...e, cad }
})
const total = lines.reduce((sum, l) => sum + l.cad, 0)

const today = new Date().toLocaleDateString("en-CA") // YYYY-MM-DD, local time
const width = 52
const row = (left, right) => left.padEnd(width - right.length) + right
// Split text into lines no longer than max, breaking between words
const wrap = (text, max) =>
  text.split(/\s+/).reduce(
    (out, word) => {
      const last = out[out.length - 1]
      if (!last) out[out.length - 1] = word
      else if (`${last} ${word}`.length <= max)
        out[out.length - 1] += ` ${word}`
      else out.push(word)
      return out
    },
    [""]
  )

// Expense line: description, original USD amount (if any), CAD amount.
// Long descriptions wrap onto extra lines under the first.
const expenseRow = l => {
  const [first, ...rest] = wrap(l.description, 20)
  return [
    first.padEnd(22) +
      (l.currency === "USD" ? `${money(l.amount)} USD -->` : "").padStart(16) +
      `${money(l.cad)} CAD`.padStart(14),
    ...rest.map(part => `  ${part}`),
  ]
}

const invoice = [
  "DRIVER EXPENSE INVOICE",
  "=".repeat(width),
  `Client:   ${clientName}`,
  `Driver:   Don Stevenson`,
  `Dates:    ${driveDates}`,
  `Prepared: ${today}`,
  "-".repeat(width),
  ...lines.flatMap(expenseRow),
  "-".repeat(width),
  row("TOTAL", `${money(total)} CAD`),
  "=".repeat(width),
  ...(rate !== 1
    ? [
        "",
        "Note: USD amounts are converted to CAD at the",
        `daily exchange rate of ${rate}, plus the incurred`,
        `${CONVERSION_FEE * 100}% currency conversion fee.`,
      ]
    : []),
  "",
].join("\n")

const safe = s => s.replace(/[^\w-]+/g, "_")
const fileName = `${safe(clientName)}_invoice_${safe(driveDates)}.txt`

// Phone-friendly version for WhatsApp/texting: no columns, since chat apps
// use proportional fonts and narrow screens. *bold* and _italic_ are WhatsApp styling.
const message = [
  "*Driver Expense Invoice*",
  `Client: ${clientName}`,
  `Driver: Don Stevenson`,
  `Dates: ${driveDates}`,
  `Prepared: ${today}`,
  "",
  ...lines.flatMap(l => [
    l.description,
    l.currency === "USD"
      ? `   ${money(l.amount)} USD → ${money(l.cad)} CAD`
      : `   ${money(l.cad)} CAD`,
  ]),
  "",
  `*TOTAL: ${money(total)} CAD*`,
  ...(rate !== 1
    ? [
        "",
        `_USD amounts are converted to CAD at the daily exchange rate of ${rate}, plus the incurred ${CONVERSION_FEE * 100}% currency conversion fee._`,
      ]
    : []),
].join("\n")

// File gets the printable column invoice; terminal shows the WhatsApp version
fs.writeFileSync(fileName, invoice)
console.log("\n" + message + "\n")
console.log(`Printable invoice saved to ${fileName}`)

// Put the phone version on the clipboard (macOS) so it can be pasted into WhatsApp
try {
  execSync("pbcopy", { input: message })
  console.log("Phone version copied to clipboard - paste it into WhatsApp.")
} catch {
  // not on a Mac; copy it from the terminal instead
}
