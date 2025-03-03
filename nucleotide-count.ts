export function nucleotideCounts(dna: string): {
  A: number
  C: number
  G: number
  T: number
} {
  const nucleotideCount = { A: 0, C: 0, G: 0, T: 0 }

  if (!/^[ACGT]*$/.test(dna)) {
    throw new Error("Invalid nucleotide in strand")
  }

  return [...dna].reduce((counts, nucleotide) => {
    counts[nucleotide as keyof typeof nucleotideCount]++
    return counts
  }, nucleotideCount)
}
