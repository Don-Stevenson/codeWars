let arrOfObjects = [
  {
    a: 1,
    b: 2,
    c: 3,
  },

  {
    a: 4,
    b: 5,
    c: 6,
  },
];

// arrOfObjects.forEach(element => {
//   newThing1 = {
//     // a: element.b,
//     // b: element.a,
//     ...element,
//     c: element.a,
//     d: element.a,
//     f: element.a,
//     g: true
//   };

//   newThing2 = {
//     // a: element.b,
//     // b: element.a,
//     ...element,
//     c: element.a,
//     d: element.a,
//     f: element.a,
//     g: true
//   };
// });

// console logging the array of objects before map
// ***********************************************
console.log("before", { arrOfObjects });

// running a map to update the values at e.c in array of values
// ***********************************************
arrOfObjects.map(e => (e.c = e.c * 2));

// console logging the array of objects after map
// ***********************************************
console.log("after", { arrOfObjects });

// update the object using a forEach call
// **************************************
// arrOfObjects.forEach((item) => {
//   item.a = 3;
//   item.dead = true;
// });


// console logging a filter where e.a values are greater or equal to 3
// *******************************************************************
console.log(
  "filter",
  arrOfObjects.filter((e) => e.a >= 3)
);

