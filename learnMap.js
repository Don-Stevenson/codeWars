const array = [1,2,3,4,5,6,7]

//takes in an array, transforms it with a function and returns a new array 
const mappedArray = array.map(x => x + 1)

console.log("mapped array is", mappedArray)
console.log("array is still", array)
