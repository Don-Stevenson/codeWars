// add some checks to avoid running counter unneccessarily

const isPrimeForLargerNums = num => {
  const last_number = +num.toString().slice(-1)

  if (last_number % 2 === 0 || last_number % 5 === 0)
    return `${num} is not a prime number.`
  else {
    let counter = 0
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        counter++
        if (counter > 2) `${num} is not a prime number.`
      }
      return `Yes, ${num} is a prime number.`
    }
  }
}
// console.log(isPrimeForLargerNums(11))
console.log(isPrimeForLargerNums(1346001801791))
// Yes, 1346001801791 is a prime number.
