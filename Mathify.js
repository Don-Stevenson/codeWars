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

const parseNum = num => {
  if (typeof num === "string") {
    return num.includes(".") ? parseFloat(num) : parseInt(num)
  }
  return num
}

const validateInput = (a, operation1, b, operation2, c) => {
  if (!a && !b && !c) {
    return "Error! You must pass at least one valid number and one operation."
  }
  if (!operation1) {
    return "Error! You must enter a valid operation."
  }
  if (!a) {
    return "Error! You must pass at least 1 valid number."
  }
  return null
}

const handleTwoNumberOperation = (a, operation1, b) => {
  if (
    [
      "plus",
      "+",
      "minus",
      "-",
      "multiply",
      "*",
      "divide",
      "/",
      "power",
      "^",
    ].includes(operation1) &&
    !b
  ) {
    return `Error! For ${operation1} you must pass 2 valid numbers. ${a} ${operation1} ___?`
  }
  if (operation1 === "root") {
    if (b) return "Error! For root, you must only pass 1 number"
    if (parseNum(a) < 0)
      return "Error! For root, you must not pass a negative number"
    return `The ${operation1} of ${a} = ${operationsObj[operation1](
      parseNum(a)
    )}`
  }
  return `${a} ${operation1} ${b} = ${operationsObj[operation1](
    parseNum(a),
    parseNum(b)
  )}`
}

const handleThreeNumberOperation = (a, operation1, b, operation2, c) => {
  if (!c || !operation2) {
    return "Error! Invalid third number or a invalid second operation."
  }

  const parsedA = parseNum(a)
  const parsedB = parseNum(b)
  const parsedC = parseNum(c)

  if (
    (operation1 === "root" || operation2 === "root") &&
    (parsedA < 0 || parsedB < 0)
  ) {
    return "Error! For root, you must not pass a negative number"
  }

  if (
    operation1 === "root" &&
    ["plus", "+", "minus", "-", "multiply", "*", "divide", "/"].includes(
      operation2
    )
  ) {
    const firstResult = operationsObj[operation1](parsedA)
    return `${operation1} of ${a} ${operation2} ${b} = ${operationsObj[
      operation2
    ](firstResult, parsedB)}`
  }

  if (
    (operation1 === "power" || operation1 === "^") &&
    ["plus", "+", "minus", "-", "multiply", "*", "divide", "/"].includes(
      operation2
    )
  ) {
    const firstResult = operationsObj[operation1](parsedA, parsedB)
    return `${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
      operation2
    ](firstResult, parsedC)}`
  }

  if (
    (operation2 === "power" || operation2 === "^") &&
    ["plus", "+", "minus", "-", "multiply", "*", "divide", "/"].includes(
      operation1
    )
  ) {
    const secondResult = operationsObj[operation2](parsedB, parsedC)
    return `${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
      operation1
    ](parsedA, secondResult)}`
  }

  if (
    ["plus", "+", "minus", "-"].includes(operation1) &&
    ["multiply", "*", "divide", "/"].includes(operation2)
  ) {
    const secondResult = operationsObj[operation2](parsedB, parsedC)
    return `${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
      operation1
    ](parsedA, secondResult)}`
  }

  const firstResult = operationsObj[operation1](parsedA, parsedB)
  return `${a} ${operation1} ${b} ${operation2} ${c} = ${operationsObj[
    operation2
  ](firstResult, parsedC)}`
}

const mathify = (a, operation1, b, operation2, c) => {
  const welcomeMessage = "\nWelcome to the Simple Command Line Calculator!"
  const thanksMessage = "\nThanks for using the Simple Command Line Calculator!"

  const validationError = validateInput(a, operation1, b, operation2, c)
  if (validationError) {
    return `${welcomeMessage}\n${validationError}`
  }

  let result
  if (!c && !operation2) {
    result = handleTwoNumberOperation(a, operation1, b)
  } else {
    result = handleThreeNumberOperation(a, operation1, b, operation2, c)
  }

  return `${welcomeMessage}\n${result}${thanksMessage}`
}

export { mathify }
