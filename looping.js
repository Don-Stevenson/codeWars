// a function adding two elements together

const numArray = [1, 2, 3, 4, 5, 6, 7];

// for (const item of array) {
//   console.log("item is:", item);
// }
const addElements = (array) => {
  for (let i = 0; i < array.length; i++) {
    // check to see if array element + 2 exists before adding the two values 
    if (array[i + 2]) console.log(array[i] + array[i + 2]);
  }
};

addElements(numArray);
// expect
// 4
// 6
// 8
// 10
// 12

