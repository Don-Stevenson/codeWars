const getFizzBuzzValue = num => {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
  if (num % 3 === 0) return "Fizz"
  if (num % 5 === 0) return "Buzz"
  return num.toString()
}

const fizzBuzz = (start = 1, end = 100) => {
  const results = []
  for (let i = start; i <= end; i++) {
    results.push(getFizzBuzzValue(i))
  }
  return results
}

console.log(fizzBuzz())
