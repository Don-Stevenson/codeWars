// trying out and learning about reduce
// ************************************

// an array with numbers in it
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// a custom reducing function that adds up the square of the numbers from a given set
const addingSquares = (accumulator, currentVal) =>
  accumulator + Math.pow(currentVal, 2);

// callling the number array with Reduce and then passing in the adding the adding squares function
console.log(numArray.reduce(addingSquares));
// expect 285

// function that subtracts the root of each number
const subtractSquares = (accum, curVal) => accum - Math.sqrt(curVal);
