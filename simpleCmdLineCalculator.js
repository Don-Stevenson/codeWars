// destructure the args into variables from proccess.argv
// const [a, operation1, b, operation2, c] = process.argv.slice(2)

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

  // console.log({ a }, { operation1 }, { b }, { operation2 }, { c })

  if (!a && !b && !c)
    return `\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number`

  // check to see if the operation1 is present
  if (!operation1)
    return `\nError! \nYou must enter a valid operation.\nThe following are valid operations:\nplus, minus, multiply, divide, power and root.\nThe required format is: number operation1 number`

  // parses the integers in case of string

  // check to see if first number is present
  if (!a)
    return `\nError! \nYou must pass at least 1 valid number.\nThe required format is: number operation number`
  if (!c && !operation2) {
    // console.log("in !c and !operation")
    // check for two numbers present when calling the following operations
    if (
      ((operation1 === "plus" || operation1 === "+") && !b) ||
      ((operation1 === "minus" || operation1 === "-") && !b) ||
      ((operation1 === "multiply" || operation1 === "*") && !b) ||
      ((operation1 === "divide" || operation1 === "/") && !b) ||
      ((operation1 === "power" || operation1 === "/") && !b)
    )
      return `\nError! \nFor ${operation1} you must pass 2 valid numbers. ${a} ${operation1} ___?`

    // check for only one number if operation1 is "root"
    if (operation1 === "root" && b)
      return `\nError!\nFor root, you must only pass 1 number`

    if (operation1 === "root")
      return `The ${operation1} of ${a} = ${operationsObj[operation1](
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
    // console.log("here in a, b, c, operation1, operation2")
    if (!c)
      return "\nError! \nInvalid third number or a invalid second operation.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*"

    if (!c && !operation2) {
      return "\nError! here \nInvalid third number or a invalid second operation.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*"
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

    // handle bedmas where multiply or divide is operation 2
    if (
      (operation1 === "plus" ||
        operation1 === "+" ||
        operation1 === "minus" ||
        operation1 === "-") &&
      (operation2 === "divide" ||
        operation2 === "/" ||
        operation2 === "multiply" ||
        operation2 === "*")
    ) {
      const firstResult = operationsObj[operation1](b, c)
      // console.log({ c }, { firstResult })

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
        ](
          firstResult,
          c
        )} \nThanks for using the Simple Command Line Calculator!`

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
        ](
          firstResult,
          c
        )} \nThanks for using the Simple Command Line Calculator!`
    }
    // handle bedmas where multiply or divide is operation 1
    if (
      (operation1 === "plus" ||
        operation1 === "+" ||
        operation1 === "minus" ||
        operation1 === "-" ||
        operation1 === "muliply" ||
        operation1 === "*" ||
        operation1 === "divide" ||
        operation1 === "/") &&
      (operation2 === "plus" ||
        operation2 === "+" ||
        operation2 === "minus" ||
        operation2 === "-" ||
        operation2 === "muliply" ||
        operation2 === "*" ||
        operation2 === "divide" ||
        operation2 === "/")
    ) {
      const firstResult = operationsObj[operation1](b, c)
      // console.log({ c }, { firstResult })

      // console.log("nfddfd", a, operation1, b, operation2, c)
      if (
        operation2 !== "plus" &&
        operation2 !== "+" &&
        operation2 !== "minus" &&
        operation2 !== "-" &&
        operation2 !== "multiply" &&
        operation2 !== "*" &&
        operation2 !== "divide" &&
        operation2 !== "/"
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
        return `${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
          operation2
        ](
          firstResult,
          c
        )} \nThanks for using the Simple Command Line Calculator!`

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
        ](
          firstResult,
          c
        )} \nThanks for using the Simple Command Line Calculator!`

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
        ](
          firstResult,
          c
        )} \nThanks for using the Simple Command Line Calculator!`

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
        return `${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
          operation2
        ](
          firstResult,
          c
        )} \nThanks for using the Simple Command Line Calculator!`
      }
    }

    // handle other scenarios
    else
      return `\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number\nThe operations must only be:\nplus(+), minus(-), multiply(*), divide(/), power(^), root \nand you must enter at least one valid number.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*
    `
  }
}
// console.log(mathify(3, "power", 3))
// expect
// Welcome to the Simple Command Line Calculator!
// 3 power of 3 = 27
// Thanks for using the Simple Command Line Calculator!

// console.log(mathify(3, "root"))
// Welcome to the Simple Command Line Calculator!
// 3 power of 3 = 27
// Thanks for using the Simple Command Line Calculator!

// console.log(mathify(9, "rot"))
// expect
// Error!
//
// You can pass up to 3 numbers and 2 operations
// number operation number operation number
// The operations must only be:
// plus(+), minus(-), multiply(*), divide(/), power(^), root
// and you must enter at least one valid number.
// Please note that to use * for multiplication
// you must escape the operation character with a backslash '\',
// i.e. \*

// console.log(mathify(9, "root", 9))
// Expect
// Welcome to the Simple Command Line Calculator!
//
// Error!
// For root, you must only pass 1 number

// console.log(mathify("", 3))
// // expect
// Error!
//
// You can pass up to 3 numbers and 2 operations
// number operation number operation number

// console.log(mathify("power", ""))
// Welcome to the Simple Command Line Calculator!

// Error!
// You can pass up to 3 numbers and 2 operations
// number operation number operation number

// console.log(mathify("3", "plus", "4"))
// Welcome to the Simple Command Line Calculator!
// 3 plus 4 = 7
// Thanks for using the Simple Command Line Calculator!

// console.log(mathify("3", "+", "4"))
// Welcome to the Simple Command Line Calculator!
// 3 + 4 = 7
// Thanks for using the Simple Command Line Calculator!

// console.log(mathify("3", "minus", "4"))
// Welcome to the Simple Command Line Calculator!
// 3 minus 4 = -1
// Thanks for using the Simple Command Line Calculator!

// console.log(mathify("60", "-", "35"))
// Welcome to the Simple Command Line Calculator!
// 3 - 4 = -1
// Thanks for using the Simple Command Line Calculator!

// console.log(mathify("3", "+", "4", "+", "4"))
// Welcome to the Simple Command Line Calculator!
// 3 + 4 + 4 = 12
// Thanks for using the Simple Command Line Calculator!

// console.log(mathify(2, "power"))
// Welcome to the Simple Command Line Calculator!
// Error!
// For power you must pass 2 valid numbers. 2 power ___?

// console.log(mathify(2, "power", 2))
// Welcome to the Simple Command Line Calculator!
// 2 power of 2 = 4
// Thanks for using the Simple Command Line Calculator!

// console.log(mathify(2, "plus", 9))
// Welcome to the Simple Command Line Calculator!
// 2 plus 9 = 11
// Thanks for using the Simple Command Line Calculator!

// console.log(mathify(2, "+", 9))
// Welcome to the Simple Command Line Calculator!
// 2 + 9 = 11
// Thanks for using the Simple Command Line Calculator!

// console.log(mathify("plus"))
// Welcome to the Simple Command Line Calculator!

// Error!
// You can pass up to 3 numbers and 2 operations
// number operation number operation number

// console.log(mathify("pls"))
// Welcome to the Simple Command Line Calculator!

// Error!
// You can pass up to 3 numbers and 2 operations
// number operation number operation number

// console.log(mathify("", "", "", "", ""))
// Welcome to the Simple Command Line Calculator!

// Error!
// You can pass up to 3 numbers and 2 operations
// number operation number operation number

// console.log(mathify("", "", ""))
// Welcome to the Simple Command Line Calculator!

// Error!
// You can pass up to 3 numbers and 2 operations
// number operation number operation number

// console.log(mathify(a, operation1, b, operation2, c))
