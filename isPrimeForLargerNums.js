const isPrimeForLargerNums = num => {
  let counter = 0
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      counter++
    }
  }
  while (counter > 2) {
    return `No, ${num} is not a prime number.`
  }

  return `Yes, ${num} is a prime number.`
}

console.log(isPrimeForLargerNums(11))
