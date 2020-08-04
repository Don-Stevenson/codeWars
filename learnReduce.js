const array = [1, 2, 3, 4, 5, 6, 7];

const reducer = (accumalator, currentVal, currentIndex, array) => {
  console.log(`
  accumalator is: ${accumalator}
  current Value: ${currentVal}
  current Index: ${currentIndex}
  array is: ${array}`);
  return accumalator += currentVal;
};



// //takes in a an array and the runs a callback function on the array
// let reducedArray = array.reduce(reducer);

// in this case should expect 28 to be the answer
// console.log(reducedArray);

// with a string , result is abc
const letterArr = ["a", "b","c","d","e","f"]

console.log(letterArr.reduce(reducer))