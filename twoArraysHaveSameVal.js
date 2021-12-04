// check if the two arrays contain any of the same values,
// if they do, remove the shared values only from the 1st array
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const array2 = [1, "b", "c", "d", "e", "f", "g", "h", "i"]

// filter out the one shared value from array1
console.log(array1.filter(val => !array2.includes(val))) // => [ 2, 3, 4, 5, 6, 7, 8, 9]

// filter out all the values except those shared value from array1 
console.log(array1.filter(val => array2.includes(val))) // => [1]