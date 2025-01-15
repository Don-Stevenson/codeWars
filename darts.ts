export const score = (x: number, y: number): number => {
  const dartLocationRadius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
  if (dartLocationRadius > 10) return 0
  if (dartLocationRadius > 5 && dartLocationRadius <= 10) return 1
  if (dartLocationRadius > 1 && dartLocationRadius <= 5) return 5
  return 10
}

console.log(score(0, 0)) // expect 10
