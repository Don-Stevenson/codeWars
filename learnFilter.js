// learning filter ...
// *******************

const arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
]

// const filterByGreaterThan3 = (arr) => {
//  return arr.filter(num => num > 3)
// }

// console.log(filterByGreaterThan3(arr))
// console.log(arr)

// const doubleDigitNos = (array) =>{
//     return array.filter(word => word.length > 3)
// }

// console.log(arr.filter((element) => element >= 5));

const isPrime = num => {
  let counter = 0
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      counter++
    }
  }
  return counter === 2 ? `Yes, ${num} is a prime number.` : `No, ${num} is not a prime number.`
}

// using filter to return an array of only prime nums by checking
// if numbers are prime or not
// console.log(arr.filter((e) => isPrime(e)))
// // expect [
//    2,  3,  5,  7, 11,
//    13, 17, 19, 23, 29
//  ]

console.log(isPrime(9))
// No, 9 is not a prime number.

console.log(isPrime(5))
// Yes, 5 is a prime number.
