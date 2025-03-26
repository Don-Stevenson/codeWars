export function transform(scoreToLetters: { [key: string]: string[] }): {
  [key: string]: number
} {
  return Object.entries(scoreToLetters).reduce(
    (letterScores, [score, letters]) => {
      letters.forEach(letter => {
        const normalizedLetter = letter.toLowerCase()
        letterScores[normalizedLetter] = Number(score)
      })
      return letterScores
    },
    {} as { [key: string]: number }
  )
}
