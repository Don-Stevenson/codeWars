// learn Reduce
// ************

// const array = [1, 2, 3, 4, 5, 6, 7]

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// const reducerFunc = (accumulator, currentVal, currentIndex, array) => {
//   console.log(`
//   accumulator is: ${accumulator}
//   current Value: ${currentVal}
//   current Index: ${currentIndex}
//   array is: ${array}`)
//   return array.push(accumulator)
// }

// takes in a an array and the runs a callback function on the array
// const reducedArray = array.reduce(reducerFunc)

// in this case should expect 28 to be the answer
// console.log(reducedArray)

// note that index is not zero based, rather it starts at 1.

// with a string , result is abcef
// const letterArr = ["a", "b","c","d","e","f"]

// const addObj = {
//   a: 2,
//   b: 4,
//   c: 6,
// }

// const total =
// Getts the values out of add object
// Object.values(addObj).reduce((t, value) => t + value)
// reduce where t is the accumilator, then value from each key
// console.log(total) // 6

// object values returns an array of values, that you can run .reduce on and use the function called reduce in
// Object.values(addObj).reduce(reducerFunc)

// expected results:
// accumalator is: 2
// current Value: 4
// current Index: 1
// array is: 2,4,6

// accumalator is: 4
// current Value: 6
// current Index: 2
// array is: 2,4,6,2

// // reduce right
// const numbers = [1, 2, 3]

// const sum = numbers.reduceRight((previousValue, currentValue) => {
//   console.log({ previousValue, currentValue })
//   return previousValue + currentValue
// })

// console.log(`Result:${sum}`)
// expect
// { previousValue: 3, currentValue: 2 }
// { previousValue: 5, currentValue: 1 }
// Result:6

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr.reduce((accumalator, currVal) => accumalator + currVal))
