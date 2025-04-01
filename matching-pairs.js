//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function isPaired(input) {
  // Define valid bracket pairs (closing bracket maps to its opening pair)
  const BRACKET_PAIRS = {
    ")": "(",
    "}": "{",
    "]": "[",
  }

  // Track opening brackets in a stack
  const openingBrackets = []

  for (const char of input) {
    // If it's an opening bracket, add it to our stack
    if (["(", "{", "["].includes(char)) {
      openingBrackets.push(char)
    }
    // If it's a closing bracket, check if it matches the last opening bracket
    else if ([")", "}", "]"].includes(char)) {
      const lastOpeningBracket = openingBrackets.pop()
      if (!lastOpeningBracket || lastOpeningBracket !== BRACKET_PAIRS[char]) {
        return false // Mismatched or extra closing bracket
      }
    }
  }

  return openingBrackets.length === 0
}
