let arrOfObjects = [
  {
    a: "1",
    b: "2",
    c: "3"
  },

  {
    a: "4",
    b: "5",
    c: "6"
  }
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

arrOfObjects.forEach( item => {
   item.a = 3
   item.dead = true
   
})

console.log(arrOfObjects)
// console.log(newThing2)
// console.log(newThing1, newThing2);

// console.log(arrOfObjects);

// console.log("arr of objs is : ", arrOfObjects);
