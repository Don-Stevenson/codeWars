const alphabetLength = 26

export const rotate = (text, shift) => {
  shift = shift % alphabetLength

  return text
    .split("")
    .map(char => {
      const isLowerCase = char >= "a" && char <= "z"
      const isUpperCase = char >= "A" && char <= "Z"

      if (isLowerCase || isUpperCase) {
        const baseCode = isLowerCase ? "a".charCodeAt(0) : "A".charCodeAt(0)
        const charCode = char.charCodeAt(0) - baseCode
        const newCharCode = (charCode + shift) % alphabetLength

        return String.fromCharCode(baseCode + newCharCode)
      }

      return char
    })
    .join("")
}
