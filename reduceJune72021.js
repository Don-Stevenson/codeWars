// trying out and learning about reduce
// ************************************

// an array with numbers in it
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// a custom reducing function that adds up the square of the numbers from a given set
const addingSquares = (accumulator, currentVal) =>
  accumulator + Math.pow(currentVal, 2)

// callling the number array with Reduce and then passing in the adding the adding squares function
console.log(numArray.reduce(addingSquares))
// expect 285

// function that subtracts the root of each number
const subtractSquares = (accum, curVal) => accum - Math.sqrt(curVal)

// function that multiplies accum with the current vals
const multiplyCurrentVals = (accum, curVal) => accum * curVal

// calling the number array with reduce which takes
// in a function that finds the difference of sqrts

console.log(numArray.reduce(subtractSquares))
// expect -17.306000526035717

console.log(numArray.reduce(multiplyCurrentVals))
// expect 362880

const logVals = (accum, curVal) => console.log({ accum }, { curVal })

console.log(numArray.reduce(logVals))
// expect
// { accum: 1 } { curVal: 2 }
// { accum: undefined } { curVal: 3 }
// { accum: undefined } { curVal: 4 }
// { accum: undefined } { curVal: 5 }
// { accum: undefined } { curVal: 6 }
// { accum: undefined } { curVal: 7 }
// { accum: undefined } { curVal: 8 }
// { accum: undefined } { curVal: 9 }
// undefined
