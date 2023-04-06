// add some checks to avoid running counter unneccessarily

const isPrimeForLargerNums = num => {

  if (parseInt(num) <= 2)
    return `Yes, ${parseInt(num)} is a prime number.`

  const last_number = +parseInt(num).toString().slice(-1)

  if (last_number % 2 === 0 || last_number % 5 === 0)
    return `${num} is not a prime number.`
  else {
    let counter = 0
    for (let i = 1; i <= parseInt(num); i++) {
      if (parseInt(num) % i === 0) {
        counter++
        if (counter > 2)`${parseInt(num)} is not a prime number.`
      }
      return `Yes, ${parseInt(num)} is a prime number.`
    }
  }
}

console.log(isPrimeForLargerNums((`13460018017913313102021`)))
//Yes, 1346001801791331 is a prime number.
