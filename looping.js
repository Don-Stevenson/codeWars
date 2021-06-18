// a function adding two elements together

const numArray = [1, 2, 3, 4, 5, 6, 7];

// for (const item of array) {
//   console.log("item is:", item);
// }

// with c style loop
// const addElements = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     // check to see if array element + 2 exists before adding the two values
//     if (array[i + 2]) console.log(array[i] + array[i + 2]);
//     if (!array[i + 2]) console.log("this element does not exist");
//   }
// };

// with map

const addElements = (array) => {
  array.map(element, (index) => {
    console.log({ element }, { index });
  });
};

addElements(numArray);
// expect
// 4
// 6
// 8
// 10
// 12
// this element does not exist
// this element does not exist
