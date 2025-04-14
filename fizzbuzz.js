const FIZZ_NUMBER = 3
const BUZZ_NUMBER = 5
const DEFAULT_START = 1
const DEFAULT_END = 100

const isDivisibleBy = (number, divisor) => number % divisor === 0

const getFizzBuzzValue = number => {
  const isFizz = isDivisibleBy(number, FIZZ_NUMBER)
  const isBuzz = isDivisibleBy(number, BUZZ_NUMBER)

  if (isFizz && isBuzz) return "FizzBuzz"
  if (isFizz) return "Fizz"
  if (isBuzz) return "Buzz"

  return number.toString()
}

const fizzBuzz = (start = DEFAULT_START, end = DEFAULT_END) => {
  const results = []

  for (let i = start; i <= end; i++) {
    results.push(getFizzBuzzValue(i))
  }

  return results
}

console.log(fizzBuzz())
