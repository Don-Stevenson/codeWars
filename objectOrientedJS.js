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
// above object of operations and passes in operations
// ***************************************************
const mathify = (operation, a, b) => {
  // parses the integers
  if (a) a = parseInt(a);
  if (b) b = parseInt(b);

  // check to see if the operation is present
  if (!operation) return "Try again, you must enter an operation";
  // check to see if a is a number
  else if (!a || typeof a !== typeof 9)
    return "You must pass at least 1 valid number";
  // check for two numbers present when calling the following operations
  else if (
    (operation === "plus" && !b) ||
    (operation === "minus" && !b) ||
    (operation === "multiply" && !b) ||
    (operation === "divide" && !b) ||
    (operation === "power" && !b)
  )
    return "For this operation, you must pass 2 valid numbers";
  // check for only one number if operation is "root"
  else if (operation === "root" && b)
    return "For root, you must only pass 1 number";
  // run root
  else if (operation === "root") {
    return operationsObj[operation](a);

    // run other operations
  } else if (
    operation === "plus" ||
    operation === "minus" ||
    operation === "multiply" ||
    operation === "divide" ||
    operation === "power"
  )
    return operationsObj[operation](a, b);
  // operation error message if the above fails
  else
    return "Try again, operation must only be: plus, minus, multiply, divide, power, root";
};

// console.log(mathify("power", 3, 3));
// // expect 27

// console.log(mathify("root", 3));
// // expect 1.7320508075688772

// console.log(mathify("rot", 9));
// // expect "Try again, operation must only be: plus, minus, multiply, divide, power, root;

// console.log(mathify("", 3));
// // expect "Try again, you must enter an operation";

// console.log(mathify("power", ""));
// // expect You must pass at least 1 valid number

// console.log(mathify("plus", "3", "4"));
// // expect 7

// console.log(mathify("minus", "3", "4"));
// expect -1

// console.log(mathify("power", 2));
// For this operation, you must pass 2 valid numbers

// console.log(mathify("power", 2,2))
// expect 4
