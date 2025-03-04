export function score(word?: string): number {
  if (!word) return 0

  let score = 0

  const scrabbleScoreObj: { [key: string]: number } = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  }

  ;[...word.toUpperCase()].forEach(letter => {
    for (const [letters, value] of Object.entries(scrabbleScoreObj)) {
      if (letters.includes(letter)) {
        score += value
      }
    }
  })

  return score
}
