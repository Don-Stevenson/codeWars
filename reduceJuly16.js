// trying out more advanced reduce functions

// array of objects
const arrOfObjs = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
];

// reducer function
const reducer = (accum, currentVal) => accum.a + currentVal.a;

// expect
// 4

console.log(arrOfObjs.reduce(reducer));
