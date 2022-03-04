// trying out more advanced reduce functions

// array of objects
const arrOfObjs = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 3, b: 4 },
  { a: 19, b: 4 },
]

// reducer function
// const reducer = (accum, currentVal) => {
//   accum += currentVal.a
//   //  console.log(typeof(accum))
//   return accum
// }
// expect
// 4

// reducer average function
// const avgReducer = (accum, currentVal) => {
//   accum += currentVal.a
//   //  console.log(typeof(accum))
//   return accum
// }

// need to pass in the initial value of the accumalator as the second parameter

// const initialVal = {sum: 0, count : 0}

// const { sum, count } = arrOfObjs.reduce(
//   (accum, currentVal) => {
//     accum.sum += currentVal.a
//     accum.count += 1
//     return accum
//   },
//   initialVal
// )
// console.log(initialVal)

// console.log(sum / count)
// console.log(sum / arrOfObjs.length)

// expect
// 6.5
// 6.5

// console.log(arrOfObjs.reduce((accum, currentVal) => {
//   return accum + currentVal.a / arrOfObjs.length
// }, 0))

// putting initial values in an object
const initialVal = { sum: 0, count: 0 }

// destructure sum and count
const { sum, count } = arrOfObjs.reduce((accum, currentVal) => {return { sum: accum.sum + currentVal.a, count: accum.count + 1 }}, initialVal)

// seeing what has been mutated
console.log({initialVal})
console.log({sum}, {count})
