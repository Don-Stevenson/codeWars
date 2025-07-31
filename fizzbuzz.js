/**
 * FizzBuzz Game Implementation
 *
 * A classic programming exercise that prints numbers 1-100, but:
 * - Multiples of 3 print "Fizz"
 * - Multiples of 5 print "Buzz"
 * - Multiples of both 3 and 5 print "FizzBuzz"
 */

// Configuration constants
const FIZZ_DIVISOR = 3
const BUZZ_DIVISOR = 5
const DEFAULT_START_NUMBER = 1
const DEFAULT_END_NUMBER = 100

/**
 * Checks if a number is evenly divisible by another number
 * @param {number} number - The number to check
 * @param {number} divisor - The divisor to check against
 * @returns {boolean} True if number is divisible by divisor
 */
const isDivisibleBy = (number, divisor) => {
  return number % divisor === 0
}

/**
 * Determines the FizzBuzz value for a single number
 * @param {number} number - The number to evaluate
 * @returns {string} Either "Fizz", "Buzz", "FizzBuzz", or the number as a string
 */
const getFizzBuzzValue = number => {
  const isDivisibleByThree = isDivisibleBy(number, FIZZ_DIVISOR)
  const isDivisibleByFive = isDivisibleBy(number, BUZZ_DIVISOR)

  // Check for FizzBuzz first (divisible by both 3 and 5)
  if (isDivisibleByThree && isDivisibleByFive) {
    return "FizzBuzz"
  }

  // Check for Fizz (divisible by 3)
  if (isDivisibleByThree) {
    return "Fizz"
  }

  // Check for Buzz (divisible by 5)
  if (isDivisibleByFive) {
    return "Buzz"
  }

  // Return the number itself as a string
  return number.toString()
}

/**
 * Validates input parameters for the FizzBuzz function
 * @param {number} start - Starting number
 * @param {number} end - Ending number
 * @throws {Error} If parameters are invalid
 */
const validateFizzBuzzInputs = (start, end) => {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    throw new Error("Start and end values must be integers")
  }

  if (start > end) {
    throw new Error("Start number cannot be greater than end number")
  }

  if (start < 1) {
    throw new Error("Start number must be positive")
  }
}

/**
 * Generates FizzBuzz sequence for a range of numbers
 * @param {number} start - Starting number (inclusive, defaults to 1)
 * @param {number} end - Ending number (inclusive, defaults to 100)
 * @returns {string[]} Array of FizzBuzz values
 * @throws {Error} If input parameters are invalid
 */
const generateFizzBuzzSequence = (
  start = DEFAULT_START_NUMBER,
  end = DEFAULT_END_NUMBER
) => {
  validateFizzBuzzInputs(start, end)

  const fizzBuzzResults = []

  for (let currentNumber = start; currentNumber <= end; currentNumber++) {
    const fizzBuzzValue = getFizzBuzzValue(currentNumber)
    fizzBuzzResults.push(fizzBuzzValue)
  }

  return fizzBuzzResults
}

/**
 * Runs the FizzBuzz game and displays the results
 */
const runFizzBuzzGame = () => {
  try {
    const results = generateFizzBuzzSequence()
    console.log("FizzBuzz Results (1-100):")
    console.log(results.join(", "))
  } catch (error) {
    console.error("Error running FizzBuzz game:", error.message)
  }
}

// Execute the game if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runFizzBuzzGame()
}

// Export functions for testing purposes
export {
  generateFizzBuzzSequence,
  getFizzBuzzValue,
  isDivisibleBy,
  validateFizzBuzzInputs,
}
