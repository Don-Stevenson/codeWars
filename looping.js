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

// console.log(addElements(numArray));
// expect
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4
// 6 5
// 7 6

// with map -
// functions like reduce. Haven't figured out how to call an index ahead
// of the current value efficiently with map
// ********

// const addElements = (array) => {
//   let total = 0;
//   array.map((element, index) => {
//     console.log({ element }, { index });
//     total += element;
//     console.log({ total });
//   });
//   return total
//  };

// expect
// *******
// { element: 1 } { index: 0 }
// { total: 1 }
// { element: 2 } { index: 1 }
// { total: 3 }
// { element: 3 } { index: 2 }
// { total: 6 }
// { element: 4 } { index: 3 }
// { total: 10 }
// { element: 5 } { index: 4 }
// { total: 15 }
// { element: 6 } { index: 5 }
// { total: 21 }
// { element: 7 } { index: 6 }
// { total: 28 }
// 28

// with reduce
// ***********

//  (accumalator, currentVal, currentIndex, array) 
// 


const addElements = (array) => {
  return array.reduce((accum, cur, index, arr) => {
    console.log({ accum }, { cur }, {index}, { arr });
    return accum += cur;
   });
};

console.log(addElements(numArray));

// expect 
// 
// { accum: 1 } { cur: 2 } { index: 1 } { arr: [
//   1, 2, 3, 4,
//   5, 6, 7
// ] }
// { accum: 3 } { cur: 3 } { index: 2 } { arr: [
//   1, 2, 3, 4,
//   5, 6, 7
// ] }
// { accum: 6 } { cur: 4 } { index: 3 } { arr: [
//   1, 2, 3, 4,
//   5, 6, 7
// ] }
// { accum: 10 } { cur: 5 } { index: 4 } { arr: [
//   1, 2, 3, 4,
//   5, 6, 7
// ] }
// { accum: 15 } { cur: 6 } { index: 5 } { arr: [
//   1, 2, 3, 4,
//   5, 6, 7
// ] }
// { accum: 21 } { cur: 7 } { index: 6 } { arr: [
//   1, 2, 3, 4,
//   5, 6, 7
// ] }
// 28
