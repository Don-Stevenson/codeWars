// takes in an array and mulitplies by given number
// with forEach
// ************************************************
//
// const multiplyByX = (arr, num) => {
//   let newArr = []
//   arr.forEach(element => {
//     newArr.push(element * num)
//   })
//   return newArr
// }

// // with a for loop
// // *********************************
// const multiplyByX = (arr, num) => {
//   let newArr = []
//   for (const item of arr) {
//     newArr.push(item * num)
//   }
//   return newArr
// }

// console.log(multiplyByX([1, 2, 3], 3))

// with map
// **********************************
const multiplyByX = (arr, num) => arr.map(e => e * num)

// console.log(multiplyByX([1, 2, 3], 3))
// expect : [ 3, 6, 9 ]

console.log(multiplyByX([1, 2, 3], 10))
// expect : [ 10, 20, 30 ]

console.log(multiplyByX([1, 2, 3], 100))
// expect : [ 100, 200, 300 ]
