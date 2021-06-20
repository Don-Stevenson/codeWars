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


// with map

// map((element, index) => { ... } )

const addElements = (array) => {
  let total = 0;
  array.map((element, index) => {
    console.log({ element }, { index });
    total += element;
    console.log({ total });
  });
  return total
 };

 console.log(addElements(numArray));

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