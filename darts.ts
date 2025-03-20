export const score = (x: number, y: number): number => {
  const distanceFromCenter = Math.sqrt(x ** 2 + y ** 2)

  // Outside the target
  if (distanceFromCenter > 10) return 0

  // Outer circle: 1 point
  if (distanceFromCenter > 5) return 1

  // Middle circle: 5 points
  if (distanceFromCenter > 1) return 5

  // Inner circle: 10 points
  return 10
}

console.log(score(0, 0)) // expect 10
