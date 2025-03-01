export function classify(num: number): string {
  validateInput(num)
  const factorsSum = calculateFactorsSum(num)
  return determineNumberClass(num, factorsSum)
}

function validateInput(num: number): void {
  if (num <= 0) {
    throw new Error("Classification is only possible for natural numbers.")
  }
}

function calculateFactorsSum(num: number): number {
  if (num === 1) return 1

  const factors = [1]
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      factors.push(i)
    }
  }

  return factors.reduce((sum, factor) => sum + factor, 0)
}

function determineNumberClass(num: number, factorsSum: number): string {
  if (num === 1) return "deficient"
  if (factorsSum === num) return "perfect"
  if (factorsSum < num) return "deficient"
  return "abundant"
}
