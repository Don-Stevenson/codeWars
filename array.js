// function that updates an array's values into a new array by adding one
// **********************************************************************

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
const addOne = (groupOfNumbers) => {
  let newNumbers = [];
  for (const item of groupOfNumbers) {
    newNumbers.push(item + 1);
  }
  return newNumbers;
};

console.log(addOne(array));
// expect [
// 2, 3, 4,  5, 6,
// 7, 8, 9, 10
// ]