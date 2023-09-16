const testData = "R2M3N3"
const address = "ETOBICOKE, ON, M63 264"
const findIndex = require("lodash/findIndex")
// /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(\.)?(\w*)?(\.)?(\s*\d{0,2}\s*),(\s*\d{4})/
// return what kind of data it is
const lines = [
  "JA",
  "Sheetal Jaitly",
  "42 B MORGAN AVE",
  "416-908-9995",
  "ETOBICOKE, ON, M6T 2T4",
  "Date Sep 10 2020",
  "$20.00",
]
const classifyString = testData => {
  const postalCodeRegex = /[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/ // checks if it has a postal code

  const [postalCodeLine] = lines.filter(line => line.match(postalCodeRegex))
  console.log({ postalCodeLine })
  const [postalCode] = postalCodeLine
    ? postalCodeLine.match(postalCodeRegex)
    : ""
  console.log({ postalCode })
  const postalCodeLineIndex = findIndex(lines, line =>
    line.match(postalCodeRegex)
  )
  if (postalCodeLineIndex !== -1) return postalCodeLine
  else return "not found"

  if (postalCodeRegex.test(testData)) return "This is a postal code"
  const streetAddressRegex = /\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+/g // checks for numbers then any amount of words after
  // NOTE: account for PO boxes??

  const fullNameRegex = /^[a-z ,.'-]+$/i
  if (fullNameRegex.test(testData)) return "This is a person's name"
  // phone number format coverage:
  // 123-456-7890
  // (123) 456-7890
  // (123)456-7890
  // 123 456 7890
  // 123.456.7890
  // +91 (123) 456-7890
  const phoneNumberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]\d{4}$/
  if (phoneNumberRegex.test(testData)) return "This is a phone number"
  // date checker
  const dateRegex =
    /(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Sept(ember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?).?\s+\d{1,2},?\s+\d{4}/
  if (dateRegex.test(testData)) return "This is a date"
  //const cityRegex = (city) => RegExp(city);
  //if (cityRegex(testData)) return "This is a city";
  if (postalCodeRegex.test(testData) || streetAddressRegex.test(testData))
    return "This is a street address"
  // full name checker
}
console.log(classifyString(address))
