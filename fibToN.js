// In this kata you will have to calculate fib(n) where:

// fib(0) := 0
// fib(1) := 1
// fin(n + 2) := fib(n + 1) + fib(n)
// Write an algorithm that can handle n up to 2,000,000.

// Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.

// HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)?
// Use this to reason what value fib has to have for negative values.

// HINT II: See https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4

/**
 * Calculates the nth Fibonacci number efficiently
 * @param {number} n - The index of the Fibonacci number to calculate
 * @returns {number} The nth Fibonacci number
 */
export const fib = n => {
  if (n === 0) return 0
  if (n === 1) return 1

  const isNegative = n < 0
  const absN = Math.abs(n)

  let [a, b] = [1, 0]

  for (let i = 2; i <= absN; i++) {
    ;[a, b] = [a + b, a]
  }

  // For negative numbers: F(-n) = (-1)^(n+1) * F(n)
  return isNegative ? Math.pow(-1, absN + 1) * a : a
}

// Test cases
console.log(fib(0)) // expect 0
console.log(fib(1)) // expect 1
console.log(fib(6)) // expect 8
console.log(fib(12)) // expect 144
console.log(fib(-8)) // expect -21
console.log(fib(15)) // expect 610
