// trying out more advanced reduce functions

// array of objects
const arrOfObjs = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
];

// reducer function
const reducer = (accum, currentVal) => {
  accum.a + currentVal.a;
};

// expect
// { accum: { a: 1, b: 2 } } { currentVal: { c: 3, d: 4 } }

arrOfObjs.reduce(reducer);
