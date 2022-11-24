// function that updates an array's values into a new array by adding one
// **********************************************************************

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// with a c style loop
// *******************

// const addOne = arr => {
//   let addOneNumbers = []
//   for (let i = 0; i < arr.length; i++) {
//     addOneNumbers.push(arr[i] + 1)
//   }
//   return addOneNumbers
// }

console.log(addOne(array))

// expect:
// [
// 2, 3, 4,  5, 6,
// 7, 8, 9, 10
// ]

// with a for of loop
// ******************

// const addOne = groupOfNumbers => {
//   let newNumbers = []
//   for (const item of groupOfNumbers) {
//     newNumbers.push(item + 1)
//   }
//   return newNumbers
// }

// expect [
// 2, 3, 4,  5, 6,
// 7, 8, 9, 10
// ]

// with map
const addOne = groupOfNumbers => groupOfNumbers.map((element) => element + 1)


// console.log(addOne(array))
// expect [
// 2, 3, 4,  5, 6,
// 7, 8, 9, 10
// ]
