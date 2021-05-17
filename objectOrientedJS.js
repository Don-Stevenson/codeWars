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
  if (a) a = parseInt(a);
  if (b) b = parseInt(b);
  if (
    operation !== "root" ||
    operation !== "plus" ||
    operation !== "minus" ||
    operation !== "multiply" ||
    operation !== "divide" ||
    operation !== "power"
  ) {
    return "Try again, operation must only be: plus, minus, multiply, divide, power, root";
  }
  if (!operation) {
    return "Try again, you must enter an operation";
  } else if (!a || typeof a !== "number") {
    return "You must pass at least 1 valid number";
  } else if (typeof b !== "number") {
    return "you must pass two valid numbers";
  } else if (
    (operation === "plus" && !b) ||
    (operation === "minus" && !b) ||
    (operation === "multiply" && !b) ||
    (operation === "divide" && !b)
  ) {
    return "For this operation, you must pass 2 valid numbers";
  } else if (
    operation === "root" ||
    operation === "plus" ||
    operation === "minus" ||
    operation === "multiply" ||
    operation === "divide" ||
    operation === "power"
  ) {
    return operationsObj[operation](a, b);
  }
};

// console.log(mathify("power", 3, 3));
// // expect 27

// console.log(mathify("root", 3));
// // expect 1.7320508075688772

console.log(mathify("root", 9));
// // expect "Try again, operation must only be: plus, minus, multiply, divide, power, root;

// console.log(mathify("", 3));
// // expect "Try again, you must enter an operation";

// console.log(mathify("power", ""));
// // expect You must pass at least 1 valid number

// console.log(mathify("plus", "3", "4"));
// // expect 7

// console.log(mathify("minus", "3", "4"));
// expect -1
