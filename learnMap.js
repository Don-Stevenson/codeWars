const array = ["a", "b", 3, 4, 5, 6, 7];

// takes in an array, transforms it with a function 
// and returns a new array
// returns a true or false statement
// [false, false, fales, true, true, etc]
// const mappedArray = array.map(x => x > 3)

// same as squaring each element by itself
// const mappedArray = array.map(x => x * x)

// returns true or false depending if x === 3
const mappedArray = array.map(x => x === 3)

// gives nan where element is a string
// const mappedArray = array.map(x => x * 3);

console.log(`mapped array is: ${mappedArray} 
array is still: ${array}`)
