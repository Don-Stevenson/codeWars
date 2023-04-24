const { performance } = require("perf_hooks")

const isPrimeForLargerNums = num => {
  const last_number = +num.toString().slice(-1)
  if (num <= 2 || num === 5) return `Yes, ${num} is a prime number.`
  if (last_number === 2 || last_number === 5 || last_number === 0)
    return `Last number is either a 2, a 5, or is a 0 and is > 10. No, ${num} is not a prime number.`
  else {
    let counter = 0
    for (let i = 1; i <= num; i += 2) {
      const last_number_of_i = +i.toString().slice(-1)
      if (last_number_of_i === 3) {
        if (num % i === 0) {
          counter++
          if (counter > 2)`No, ${num} is not a prime number.`
        }
        // Skip over the next number as it equals equals 5
        i += 2
      } else if (num % i === 0) {
        counter++
      }
      if (counter > 2) return `Counter is ${counter} Here No, ${num} is not a prime number.`
    }
    if (counter === 2) return `Counter is ${counter}
    Yes, ${num} is a prime number.`
    else return `Counter is ${counter}
    No, ${num} is not a prime number.`
  }
}
const startTime = performance.now()
const resultOfIsPrimeForLargerNums = isPrimeForLargerNums(1115)
const endTime = performance.now()

console.log(
  `${resultOfIsPrimeForLargerNums}
Call to run isPrimeForLargerNums took ${((endTime - startTime) / 1000).toFixed(
    3
  )} seconds`
)
//Yes, 134600131311 is a prime number.
