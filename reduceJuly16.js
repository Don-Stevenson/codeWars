// trying out more advanced reduce functions

// array of objects
const arrOfObjs = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 3, b: 4 },
  { a: 19, b: 4 },
];

// reducer function
const reducer = (accum, currentVal) => {
  accum.a += currentVal.a
//  console.log(typeof(accum)) 
 
 
 return accum
}
// expect
// 4

console.log(arrOfObjs.reduce(reducer));
// expect 
// { a: 26, b: 2 }