// learning map
// ************

// takes in an array, transforms it with a function
// and returns a new array
// returns a true or false statement
// [false, false, fales, true, true, etc]
// const mappedArray = array.map(x => x > 3)

// same as squaring each element by itself
// const mappedArray = array.map(x => x * x)

// returns true or false depending if x === 3
// const mappedArray = array.map(x => x === 3)

// gives nan where element is a string
const array = ["a", "b", 3, 4, 5, 6, 7]
const mappedArray = array.map(x => x * 3)

const mappedWithBraces = array.map(x => x * 3)

console.table(`mapped array is: ${mappedArray} 
mappedWithBraces array is: ${mappedWithBraces} 
array is still: ${array}`)

// mapped array is: NaN,NaN,9,12,15,18,21 
// mappedWithBraces array is: NaN,NaN,9,12,15,18,21 
// array is still: a,b,3,4,5,6,7
