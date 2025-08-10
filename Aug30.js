// filtering an array and return numbers that are even
//

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a"]
const evenFilter = array => array.filter(e => e % 2 === 0)
const oddFilter = array => array.filter(e => e % 2 !== 0)
const findFive = array => array.filter(e => e === 5)
const findTen = array => array.filter(e => e === 10)
const findGreaterThanFive = array => array.filter(e => e > 5)
const findLessThanFive = array => array.filter(e => e < 5)
const elementIsAString = array =>
  array.filter(e => typeof e === typeof "string") // => ["a"]
const elementIsANum = array => array.filter(e => typeof e !== typeof "string") // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
console.log("evens", evenFilter(numberArray)) // => [ 2, 4, 6, 8, 10 ]
console.log("odds", oddFilter(numberArray)) // => [ 1, 3, 5, 7, 9 ]
console.log("find 5", findFive(numberArray)) // => [ 5 ]
console.log("find 10", findTen(numberArray)) // => [ 10 ]
console.log("find less than 5", findLessThanFive(numberArray)) // => [ 1, 2, 3, 4 ]
console.log("find the string element(s)", elementIsAString(numberArray)) // => find the string element(s) a
console.log("find the number element(s)", elementIsANum(numberArray)) // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
