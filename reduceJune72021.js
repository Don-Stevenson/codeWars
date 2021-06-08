// trying out and learning about reduce
// ************************************

// an array with numbers in it
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// a custom reducing function that adds up numbers
const addingFunction = (accumulator, currentVal) => accumulator + currentVal;

// callling the number array with Reduce and then passing in the adding the adding function
console.log(numArray.reduce(addingFunction));
// expect 45