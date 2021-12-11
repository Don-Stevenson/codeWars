// destructure the args into variables from proccess.argv
const  [a, operation, b] = process.argv.slice(2)

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
}

// a higher order function that calls the
// above object of operations and passes in operations
// ***************************************************
const mathify = (operation, a, b) => {
  // check to see if the operation is present
  if (!operation) 
    return "Try again, you must enter a valid operation"

  // check to see if the operation is present
  if (!a)
    return `Try again, you must pass at least 1 valid number`

  // parses the integers in case of string
  if (a)
    a = parseInt(a)
  if (b) 
    b = parseInt(b)

  // check to see if a is a number
  if (!a || typeof a !== typeof 9)
    return "Try again, you must pass at least 1 valid number"

  // check for two numbers present when calling the following operations
  if (
    (operation === "plus" && !b) ||
    (operation === "minus" && !b) ||
    (operation === "multiply" && !b) ||
    (operation === "divide" && !b) ||
    (operation === "power" && !b)
  )
    return `Try again, for ${operation} you must pass 2 valid numbers. ${a} ${operation} ___?`

  // check for only one number if operation is "root"
  if (operation === "root" && b)
    return "For root you must only pass 1 number"

  // run root operation
  if (operation === "root")
    return `The ${operation} of ${a} = ${operationsObj[operation](a)}` 

  // power
  if (operation === "power")
    return `${a} to the ${operation} of ${b} = ${operationsObj[operation](a, b)}`

  // divide
  if (operation === "multiply")
    return  `${a} mulitplied by ${b} = ${operationsObj[operation](a,b)}`
    
  // multiply
  if (operation === "divide")
    return  `${a} divided by ${b} = ${operationsObj[operation](a,b)}`

  // run other operations
  if (
    operation === "plus" ||
    operation === "minus" 
  ) {
    return `${a} ${operation} ${b} = ${operationsObj[operation](a,b)}`
  }
  // handle a scenario when nothing else is true
  else
    return `    Try again, the operation must only be: 
    plus, minus, multiply, divide, power, root and 
    you must enter at least one valid number`
}

// console.log(mathify("power", 3, 3))
// // expect 27

// console.log(mathify("root", 3))
// // expect 1.7320508075688772

// console.log(mathify("rot", 9))
// // expect "Try again, operation must only be: plus, minus, multiply, divide, power, root

// console.log(mathify("root", 9, 9))
// expect For root, you must only pass 1 number

// console.log(mathify("", 3))
// // expect "Try again, you must enter an operation"

// console.log(mathify("power", ""))
// // expect Try again, you must enter at least one number

// console.log(mathify("plus", "3", "4"))
// // expect 7

// console.log(mathify("minus", "3", "4"))
// expect -1

// console.log(mathify("power", 2))
// For power you must pass 2 valid numbers

// console.log(mathify("power", 2, 2))
// expect 4

// console.log(mathify("plus", 2, 9))
// expect 11

// console.log(mathify("plus"))
// expect Try again, you must enter at least one number

// console.log(mathify("", ""))
// expect "Try again, you must enter an operation"

console.log(mathify(operation, a, b))
