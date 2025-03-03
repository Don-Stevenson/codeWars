export function parse(phrase: string): string {
  const words = phrase.split(" ")
  const acronymParts: string[] = []

  words.forEach(word => {
    if (isCamelCase(word)) {
      acronymParts.push(extractCamelCaseInitials(word))
    } else if (isHyphenated(word)) {
      acronymParts.push(extractHyphenatedInitials(word))
    } else {
      acronymParts.push(word[0] || "")
    }
  })

  return acronymParts.join("").toUpperCase()
}

function isCamelCase(word: string): boolean {
  return /([a-z])([A-Z])/g.test(word)
}

function isHyphenated(word: string): boolean {
  return word.includes("-")
}

function extractCamelCaseInitials(word: string): string {
  const matches = word.match(/[A-Z]/g)
  return matches ? matches.join("") : word[0] || ""
}

function extractHyphenatedInitials(word: string): string {
  return word
    .split("-")
    .map(part => part[0] || "")
    .join("")
}
