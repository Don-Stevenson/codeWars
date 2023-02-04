// a place to try out the every
// ****************************
// looks at every value in an array
//
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const negArr = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]

// function that checks if a value is above 0 and returns true or false
const isValueAbove = value => (value > 0 ? true : false)

// console.log(arr.every(isValueAbove))
// expect true

// console.log(negArr.every(isValueAbove))
// expect false

const mixedLetters = ["a", "c", "d", "e", "f", "g", "h"]

const letterArr = ["f", "f", "f", "f", "f", "f", "f"]

const isEveryValueF = value =>
    value === "f" ? true : false

console.log(letterArr.every(isEveryValueF)) // => true

console.log(mixedLetters.every(isEveryValueF)) // => false
