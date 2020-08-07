// const array = [1, 2, 3, 4, 5, 6, 7];

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3

// }

// const reducer = (accumalator, currentVal, currentIndex, object) => {
//   console.log(`
//   accumalator is: ${accumalator}
//   current Value: ${currentVal}
//   current Index: ${currentIndex}
//   object is: ${object}`);
//   return accumalator += currentVal;
// };

// // //takes in a an array and the runs a callback function on the array
// // let reducedArray = array.reduce(reducer);

// // in this case should expect 28 to be the answer
// // console.log(reducedArray);

// // note that index is not zero based, rather it starts at 1.

// // with a string , result is abcef
// const letterArr = ["a", "b","c","d","e","f"]



const addObj = {
  a: { value: 1 },
  b: { value: 2 },
  c: { value: 3 }
};

const total = Object.values(addObj).reduce((t,  {value} ) => t + value, 0);

console.log(total); // 6
