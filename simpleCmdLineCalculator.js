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

  console.log({ a }, { operation1 }, { b }, { operation2 }, { c })

  if (!a && !b && !c)
    return `\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number`

  // check to see if the operation1 is present
  if (!operation1)
    return `\nWelcome to the Simple Command Line Calculator!\nError! \nYou must enter a valid operation.\nThe following are valid operations:\nplus, minus, multiply, divide, power and root.\nThe required format is: number operation1 number`

  // parses the integers in case of string

  // check to see if first number is present
  if (!a)
    return `\nWelcome to the Simple Command Line Calculator!\nError! \nYou must pass at least 1 valid number.\nThe required format is: number operation number`
  if (!c && !operation2) {
    // check for two numbers present when calling the following operations
    if (
      ((operation1 === "plus" || operation1 === "+") && !b) ||
      ((operation1 === "minus" || operation1 === "-") && !b) ||
      ((operation1 === "multiply" || operation1 === "*") && !b) ||
      ((operation1 === "divide" || operation1 === "/") && !b) ||
      ((operation1 === "power" || operation1 === "/") && !b)
    )
      return `\nWelcome to the Simple Command Line Calculator!\nError! \nFor ${operation1} you must pass 2 valid numbers. ${a} ${operation1} ___?`

    // check for only one number if operation1 is "root"
    if (operation1 === "root" && b)
      return `\nWelcome to the Simple Command Line Calculator!\nError!\nFor root, you must only pass 1 number`

    if (operation1 === "root")
      return `\nWelcome to the Simple Command Line Calculator!\nThe ${operation1} of ${a} = ${operationsObj[
        operation1
      ](a)}\nThanks for using the Simple Command Line Calculator!`

    if (operation1 === "power" || operation1 === "^")
      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} of ${b} = ${operationsObj[
        operation1
      ](a, b)}\nThanks for using the Simple Command Line Calculator!`

    if (operation1 === "multiply" || operation1 === "*")
      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} ${b} = ${operationsObj[
        operation1
      ](a, b)}\nThanks for using the Simple Command Line Calculator!`

    if (operation1 === "divide" || operation1 === "/")
      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} ${b} = ${operationsObj[
        operation1
      ](a, b)}\nThanks for using the Simple Command Line Calculator!`

    if (
      operation1 === "plus" ||
      operation1 === "minus" ||
      operation1 === "+" ||
      operation1 === "-"
    ) {
      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} ${b} = ${operationsObj[
        operation1
      ](a, b)}\nThanks for using the Simple Command Line Calculator!`
    }
  }

  if ((a, b, c, operation1, operation2)) {
    console.log("here in a, b, c, operation1, operation2")

    if (!c && !operation2) {
      return "\nWelcome to the Simple Command Line Calculator!\nError! \nInvalid third number or a invalid second operation.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*"
    }

    // handle root scenarios with 2 numbers and 2 operations
    if (
      a &&
      b &&
      !c &&
      operation1 === "root" &&
      /plus|\+|minus|-|multiply|\*|divide|\//.test(operation2)
    ) {
      const firstResult = operationsObj[operation1](a)
      return `\nWelcome to the Simple Command Line Calculator!\n${operation1} of ${a} ${operation2} ${b} = ${operationsObj[
        operation2
      ](firstResult, b)}\nThanks for using the Simple Command Line Calculator!`
    }

    if (
      a &&
      b &&
      c &&
      operation1 === "root" &&
      /plus|\+|minus|-|multiply|\*|divide|\//.test(operation2)
    ) {
      return `\nWelcome to the Simple Command Line Calculator!\nError! \nYou cannot pass 3 numbers when one operation is root`
    }

    // handle exponents where power is first
    if (
      (operation1 === "power" || operation1 === "^") &&
      /plus|\+|minus|-|multiply|\*|divide|\//.test(operation2)
    ) {
      const firstResult = operationsObj[operation1](a, b)

      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
        operation2
      ](c, firstResult)} \nThanks for using the Simple Command Line Calculator!`
    }
    // handle exponents where power is 2nd
    if (
      (operation2 === "power" || operation2 === "^") &&
      /plus|\+|minus|-|multiply|\*|divide/.test(operation1)
    ) {
      const firstResult = operationsObj[operation2](b, c)

      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
        operation1
      ](a, firstResult)} \nThanks for using the Simple Command Line Calculator!`
    }
    if (
      (operation1 == "plus" ||
        operation1 == "+" ||
        operation1 == "minus" ||
        operation1 == "-") &&
      (operation2 === "divide" ||
        operation2 === "/" ||
        operation2 === "multiply" ||
        operation2 === "*")
    ) {
      // handle bedmas where operation1 is plus or minus and operation 2 is multiply or divide
      const firstResult = operationsObj[operation2](b, c)

      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
        operation1
      ](a, firstResult)} \nThanks for using the Simple Command Line Calculator!`
    }
    // handle bedmas where multiply or divide is not operation 2
    const firstResult = operationsObj[operation1](a, b)

    if (!/plus|\+|minus|-|multiply|\*|divide|\//.test(operation2))
      return "\nWelcome to the Simple Command Line Calculator!\nError! \nInvalid second operation.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*"

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
      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
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
      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
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
      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
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
      return `\nWelcome to the Simple Command Line Calculator!\n${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
        operation2
      ](firstResult, c)} \nThanks for using the Simple Command Line Calculator!`
    }
  }

  // handle other scenarios
  else
    return `\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number\nThe operations must only be:\nplus(+), minus(-), multiply(*), divide(/), power(^), root \nand you must enter at least one valid number.\nPlease note that to use * for multiplication\nyou must escape the operation character with a backslash '\\',\ni.e. \\*
    `
}

console.log(mathify("3", "root", "2", "minus"))

export { mathify }
