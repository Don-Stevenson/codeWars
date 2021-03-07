// object to store the different operations
// and formula functions
//******************************************
const operationsObj = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  power: (a, b) => Math.pow(a, b),
  root: (a) => Math.sqrt(a),
};

// a higher order function that calls the
// above object of operations and passes operations
// ********************************************
const mathify = (operation, a, b) => {
  if (
    operation === "root" ||
    operation === "plus" ||
    operation === "minus" ||
    operation === "multiply" ||
    operation === "divide" ||
    operation === "power"
  ) {
    return operationsObj[operation](a, b);
  } else
    return "Try again, operation must only be: plus, minus, multiply, divide, power, root";
};

console.log(mathify("power", 3, 3));
// expect 27

console.log(mathify("plus", 3, 3));
// expect 6

console.log(mathify("root", 3));
// 1.7320508075688772

console.log(mathify("rot", 9));
// expect "Try again, operation must only be: plus, minus, multiply, divide, power, root";
