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

arrOfObjs.reduce(reducer);
