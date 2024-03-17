// destructure the args into variables from proccess.argv
const [a, operation1, b, operation2, c] = process.argv.slice(2)

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
const mathify = (a, operation1, b, operation2, c) => {
  console.log(`args ${a} ${operation1} ${b} ${operation2} ${c}`)
  console.log(`Welcome to the Simple Command Line Calculator!`)
  const parseNum = num => {
    if (typeof num === "string") {
      if (num.includes(".")) {
        return parseFloat(num)
      } else return parseInt(num)
    } else return num
  }
  a = parseNum(a)
  b = parseNum(b)
  c = parseNum(c)

  if (!a && !b && !c)
    return `\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number`

  // check to see if the operation1 is present
  if (!operation1)
    return `\nError! \nYou must enter a valid operation.\nThe following are valid operations:\nplus, minus, multiply, divide, power and root.\nThe required format is: number operation1 number`

  // parses the integers in case of string

  // check to see if first number is present
  if (!a)
    return `\n =\nError! \nYou must pass at least 1 valid number.\nThe required format is: number operation number`
  if (!c && !operation2) {
    console.log(`here in !c a${a} b${b}`)
    // check for two numbers present when calling the following operations
    if (
      ((operation1 === "plus" || operation1 === "+") && !b) ||
      ((operation1 === "minus" || operation1 === "-") && !b) ||
      ((operation1 === "multiply" || operation1 === "*") && !b) ||
      ((operation1 === "divide" || operation1 === "/") && !b) ||
      ((operation1 === "power" || operation1 === "/") && !b)
    )
      return `\n =\nError! \nFor ${operation1} you must pass 2 valid numbers. ${a} ${operation1} ___?`

    // check for only one number if operation1 is "root"
    if (operation1 === "root" && b)
      return `For root you must only pass 1 number`

    if (operation1 === "root")
      return `\nThe ${operation1} of ${a} = ${operationsObj[operation1](
        a
      )}\nThanks for using the Simple Command Line Calculator!`

    if (operation1 === "power" || operation1 === "^")
      return `${a} ${operation1} of ${b} = ${operationsObj[operation1](
        a,
        b
      )}\nThanks for using the Simple Command Line Calculator!`

    if (operation1 === "multiply" || operation1 === "*")
      return `${a} ${operation1} ${b} = ${operationsObj[operation1](
        a,
        b
      )}\nThanks for using the Simple Command Line Calculator!`

    if (operation1 === "divide" || operation1 === "/")
      return `${a} ${operation1} ${b} = ${operationsObj[operation1](
        a,
        b
      )}\nThanks for using the Simple Command Line Calculator!`

    if (
      operation1 === "plus" ||
      operation1 === "minus" ||
      operation1 === "+" ||
      operation1 === "-"
    ) {
      return `${a} ${operation1} ${b} = ${operationsObj[operation1](
        a,
        b
      )}\nThanks for using the Simple Command Line Calculator!`
    }
  }

  if ((a, b, c, operation1, operation2)) {
    console.log("in three args", a, b, c, operation1, operation2)
    if (!c)
      return "\nError! \nInvalid third number or a invalid second operation.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*"

    console.log({ operation2 })

    if (!c) {
      return "\nError! \nInvalid third number or a invalid second operation.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*"
    }
    if (
      operation1 === "root" ||
      operation1 === "power" ||
      (operation1 === "^" && operation2) ||
      operation2 === "root" ||
      operation2 === "power" ||
      (operation2 === "^" && operation1)
    )
      return `\nError! \nCannot pass power or root as one of the 2 operations`

    if (operation1 === "mulitply" || operation1 === "divide") {
      const firstResult = operationsObj[operation1](a, b)
    }
    if (
      !operation2 !== "plus" ||
      !operation2 !== "+" ||
      !operation2 !== "minus" ||
      !operation2 !== "-" ||
      !operation2 === "multiply" ||
      !operation2 === "*" ||
      !operation2 === "divide" ||
      !operation2 === "/"
    )
      return "\nError! \nInvalid second operation.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*"

    // handle root and power scenarios
    // handle addition
    if (
      ((operation1 === "plus" || operation1 === "+") &&
        (operation2 === "plus" || operation2 === "+")) ||
      ((operation1 === "plus" || operation1 === "+") &&
        (operation2 === "minus" || operation2 === "-")) ||
      ((operation1 === "plus" || operation1 === "+") &&
        (operation2 === "multiply" || operation2 === "*")) ||
      ((operation1 === "plus" || operation1 === "+") &&
        (operation2 === "divide" || operation2 === "/"))
    )
      return `here ${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
        operation2
      ](firstResult, c)} \nThanks for using the Simple Command Line Calculator!`

    // handle minus
    if (
      ((operation1 === "minus" || operation1 === "-") &&
        (operation2 === "plus" || operation2 === "+")) ||
      ((operation1 === "minus" || operation1 === "-") &&
        (operation2 === "minus" || operation2 === "-")) ||
      ((operation1 === "minus" || operation1 === "-") &&
        (operation2 === "multiply" || operation2 === "*")) ||
      ((operation1 === "minus" || operation1 === "-") &&
        (operation2 === "divide" || operation2 === "/"))
    )
      return `here ${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
        operation2
      ](firstResult, c)} \nThanks for using the Simple Command Line Calculator!`

    // handle multiply
    if (
      ((operation1 === "multiply" || operation1 === "*") &&
        (operation2 === "plus" || operation2 === "+")) ||
      ((operation1 === "multiply" || operation1 === "*") &&
        (operation2 === "minus" || operation2 === "-")) ||
      ((operation1 === "multiply" || operation1 === "*") &&
        (operation2 === "multiply" || operation2 === "*")) ||
      ((operation1 === "multiply" || operation1 === "*") &&
        (operation2 === "divide" || operation2 === "/"))
    )
      return `here ${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
        operation2
      ](firstResult, c)} \nThanks for using the Simple Command Line Calculator!`

    // handle divide
    if (
      ((operation1 === "divide" || operation1 === "/") &&
        (operation2 === "plus" || operation2 === "+")) ||
      ((operation1 === "divide" || operation1 === "/") &&
        (operation2 === "minus" || operation2 === "-")) ||
      ((operation1 === "divide" || operation1 === "/") &&
        (operation2 === "multiply" || operation2 === "*")) ||
      ((operation1 === "divide" || operation1 === "/") &&
        (operation2 === "divide" || operation2 === "/"))
    ) {
      console.log("IN divide")
      return `here ${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
        operation2
      ](firstResult, c)} \nThanks for using the Simple Command Line Calculator!`
    }
  }

  // handle other scenarios
  else
    return `\n =\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number\nThe operations must only be:\nplus(+), minus(-), multiply(*), divide(/), power(^), root \nand you must enter at least one valid number.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*
    `
}

// console.log(mathify("power", 3, 3))
// // expect 27

// console.log(mathify("root", 3))
// // expect 1.7320508075688772

// console.log(mathify("rot", 9))
// // expect "Try again, operation1 must only be: plus, minus, multiply, divide, power, root

// console.log(mathify("root", 9, 9))
// expect For root, you must only pass 1 number

// console.log(mathify("", 3))
// // expect "Try again, you must enter an operation1"

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
// expect "Try again, you must enter an operation1"

console.log(mathify(a, operation1, b, operation2, c))
