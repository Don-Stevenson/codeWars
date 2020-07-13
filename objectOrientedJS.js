let a;
let b;

const operations = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  square: (a, b) => Math.pow(a, 2),
  root: a => Math.sqrt(a)
};

const mathify = (value, a, b) => {
  return operations[value](a, b);
};

console.log(mathify("square", 8));

console.log(mathify("root",  9));
