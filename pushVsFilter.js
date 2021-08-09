// trying out the difference between filitering to a new array vs pushing

// even nums with map and push

const returnEvens = array => {
  let evenArray = [];
  array.map((e) => e % 2 === 0 ? evenArray.push(e) : console.log(`${e} is not even`) );
  return evenArray;
};

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// even nums with push and for loop

// const returnEvens = (array) => {
//   let evenArray = [];
//   for (const e of array) {
//     if (e % 2 === 0) {
//       evenArray.push(e);
//     }
//   }
//   return evenArray;
// };

// console.log(returnEvens(arr));
// expect
// [ 2, 4, 6, 8, 10 ]

// const returnEvens = (array) => array.filter((e) => e % 2 === 0);

console.log(returnEvens(arr));
// expect
// [ 2, 4, 6, 8, 10 ]
