// take in a number and return a non negative factorial product of all the numbers.
// if n is below 0 or above 12, throw a range error

const factorial = n => {
  if (!(n >= 0 && n <= 12)) {
    return "Error: the value must be between 0 and 12"
  } else if (n === 0) {
    return 1
  } else return n * factorial(n - 1)
}

console.log(factorial(3))
// expect 6

console.log(factorial(10))
// expect 3628800

console.log(factorial(-6))
// expect "the value must be between 0 and 12"
