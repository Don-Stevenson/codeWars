// object to store the different operations
// and formula functions
//******************************************
const operationsObj = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  power: (a, b) => Math.pow(a, b),
  root: a => Math.sqrt(a)
};

// a higher order function that calls the
// above object of operations and passes operations
// ********************************************
const mathify = (operation, a, b) => {
  return operationsObj[operation](a, b);
};

console.log(mathify("power", 3, 3));

console.log(mathify("root", 9));
