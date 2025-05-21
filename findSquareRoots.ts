export function squareRoot(radicand: number): number {
  if (radicand === 1) return 1

  let currentGuess = radicand / 2
  let previousGuess = 0

  while (currentGuess !== previousGuess) {
    previousGuess = currentGuess
    // Newton's method formula: x_{n+1} = (x_n + radicand/x_n) / 2
    currentGuess = (currentGuess + radicand / currentGuess) / 2
  }

  return currentGuess
}

console.log(squareRoot(1))
console.log(squareRoot(2))
console.log(squareRoot(3))
console.log(squareRoot(4))
console.log(squareRoot(5))
console.log(squareRoot(6))
console.log(squareRoot(7))
console.log(squareRoot(8))
console.log(squareRoot(9))
console.log(squareRoot(10))
console.log(squareRoot(11))
console.log(squareRoot(12))
console.log(squareRoot(13))
