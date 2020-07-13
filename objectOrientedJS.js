let a;
let b;


// object to store the different operations
// and formula functions
//******************************************
const operations = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  square: (a, b) => Math.pow(a, 2),
  root: a => Math.sqrt(a)
};

// a higher order function that calls the 
// above object of operations and passes values
// ********************************************
const mathify = (value, a, b) => {
  return operations[value](a, b);
};

console.log(mathify("square", 8));

console.log(mathify("root",  9));
