// destructure the args into variables from proccess.argv
const [a, operation, b] = process.argv.slice(2)

// object to store the different operations
// and formula functions

const operationsObj = {
  plus: (a, b) => a + b,
  "+": (a, b) => a + b,
  minus: (a, b) => a - b,
  "-": (a, b) => a - b,
  multiply: (a, b) => a * b,
  "*": (a, b) => a * b,
  divide: (a, b) => a / b,
  "/": (a, b) => a / b,
  power: (a, b) => Math.pow(a, b),
  "^": (a, b) => Math.pow(a, b),
  root: a => Math.sqrt(a),
}

// a higher order function that calls the
// above object of operations and passes in operations
const mathify = (operation, a, b) => {
  console.log(`Welcome to the Simple Command Line Calculator!`)
  if (!operation && !a && !b)
    console.log(
      `Error! \nThe following are valid operations:\nplus, minus, multiply, divide, power and root.`
    )
  // check to see if the operation is present
  if (!operation)
    return `Error! \nYou must enter a valid operation.\nThe required format is: number operation number`

  // parses the integers in case of string
  const parseNum = num => {
    if (typeof num === "string") {
      if (num.includes(".")) {
        return parseFloat(num)
      } else return parseInt(num)
    } else return num
  }
  a = parseNum(a)
  b = parseNum(b)

  // check to see if first number is present
  if (!a)
    return `Error! \nYou must pass at least 1 valid number.\nThe required format is: number operation number`

  // check for two numbers present when calling the following operations
  if (
    ((operation === "plus" || operation === "+") && !b) ||
    ((operation === "minus" || operation === "-") && !b) ||
    ((operation === "multiply" || operation === "*") && !b) ||
    ((operation === "divide" || operation === "/") && !b) ||
    ((operation === "power" || operation === "/") && !b)
  )
    return `Error! \nFor ${operation} you must pass 2 valid numbers. ${a} ${operation} ___?`

  // check for only one number if operation is "root"
  if (operation === "root" && b) return `For root you must only pass 1 number`

  if (operation === "root")
    return `\nThe ${operation} of ${a} = ${operationsObj[operation](
      a
    )}\nThanks for using the Simple Command Line Calculator!`

  if (operation === "power" || operation === "^")
    return `${a} ${operation} of ${b} = ${operationsObj[operation](
      a,
      b
    )}\nThanks for using the Simple Command Line Calculator!`

  if (operation === "multiply" || operation === "*")
    return `${a} ${operation} ${b} = ${operationsObj[operation](
      a,
      b
    )}\nThanks for using the Simple Command Line Calculator!`

  if (operation === "divide" || operation === "/")
    return `${a} ${operation} ${b} = ${operationsObj[operation](
      a,
      b
    )}\nThanks for using the Simple Command Line Calculator!`

  if (
    operation === "plus" ||
    operation === "minus" ||
    operation === "+" ||
    operation === "-"
  ) {
    return `${a} ${operation} ${b} = ${operationsObj[operation](
      a,
      b
    )}\nThanks for using the Simple Command Line Calculator!`
  }

  // handle other scenarios
  else
    return `Error! \nThe operation must only be:\nplus(+), minus(-), multiply(*), divide(/), power(^), root \nand you must enter at least one valid number.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*
    `
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

// console.log(mathify("pls"))
// expect Try again, you must enter at least one number

// console.log(mathify("", ""))
// expect "Try again, you must enter an operation"

console.log(mathify(operation, a, b))
