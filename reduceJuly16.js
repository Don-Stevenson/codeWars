// trying out more advanced reduce functions

// array of objects
const arrOfObjs = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
];

// reducer function
const reducer = (accum, currentVal) => {
  console.log({ accum }, { currentVal });
};

// expect
// { accum: { a: 1, b: 2 } } { currentVal: { c: 3, d: 4 } }

arrOfObjs.reduce(reducer);
