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
];

// const filterByGreaterThan3 = (arr) => {
//  return arr.filter(num => num > 3)
// }

// console.log(filterByGreaterThan3(arr))
// console.log(arr)

// const doubleDigitNos = (array) =>{
//     return array.filter(word => word.length > 3)
// }

// console.log(arr.filter((element) => element >= 5));

const isPrime = (num) => {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      counter++;
    }
  }
  if (counter === 2) {
    return true;
  } else return false;
};

// using filter to return an array of only prime nums by checking
// if numbers are prime or not
console.log(arr.filter((e) => isPrime(e)));
// console.log(isPrime(9));
