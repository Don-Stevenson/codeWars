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

console.log("before", { arrOfObjects });
// arrOfObjects.forEach((item) => {
//   item.a = 3;
//   item.dead = true;
// });

arrOfObjects.map((e) => (e.c = e.c * 2));
console.log("after", { arrOfObjects });

console.log("filter", arrOfObjects.filter((e) => e.a >= 3));
// console.log(newThing2)
// console.log(newThing1, newThing2);

// console.log(arrOfObjects);

// console.log("arr of objs is : ", arrOfObjects);
