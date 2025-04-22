/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} n - The number to calculate factorial for
 * @returns {number} The factorial of n
 * @throws {RangeError} If n is negative or greater than 12
 * @throws {TypeError} If n is not a number
 */
const factorial = n => {
  // Input validation
  if (typeof n !== "number") {
    throw new TypeError("Input must be a number")
  }

  // Range validation
  if (n < 0 || n > 12) {
    throw new RangeError("Input must be between 0 and 12")
  }

  // Base case
  if (n === 0) {
    return 1
  }

  // Recursive case
  return n * factorial(n - 1)
}

// Test cases
console.log(factorial(3)) // Expected: 6
console.log(factorial(10)) // Expected: 3628800

// Error cases
try {
  console.log(factorial(-6)) // Should throw RangeError
} catch (error) {
  console.log(`Error: ${error.message}`)
}

try {
  console.log(factorial(13)) // Should throw RangeError
} catch (error) {
  console.log(`Error: ${error.message}`)
}

try {
  console.log(factorial("5")) // Should throw TypeError
} catch (error) {
  console.log(`Error: ${error.message}`)
}
