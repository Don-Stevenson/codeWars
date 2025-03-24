// Mathematical operations mapping
const OPERATIONS = {
  // Basic arithmetic
  plus: { fn: (a, b) => a + b, alias: "+", requiresTwoNumbers: true },
  "+": { fn: (a, b) => a + b, requiresTwoNumbers: true },
  minus: { fn: (a, b) => a - b, alias: "-", requiresTwoNumbers: true },
  "-": { fn: (a, b) => a - b, requiresTwoNumbers: true },
  multiply: { fn: (a, b) => a * b, alias: "*", requiresTwoNumbers: true },
  "*": { fn: (a, b) => a * b, requiresTwoNumbers: true },
  divide: { fn: (a, b) => a / b, alias: "/", requiresTwoNumbers: true },
  "/": { fn: (a, b) => a / b, requiresTwoNumbers: true },

  // Advanced operations
  power: { fn: (a, b) => Math.pow(a, b), alias: "^", requiresTwoNumbers: true },
  "^": { fn: (a, b) => Math.pow(a, b), requiresTwoNumbers: true },
  root: { fn: a => Math.sqrt(a), requiresTwoNumbers: false },
}

const MESSAGES = {
  welcome: "\nWelcome to the Simple Command Line Calculator!",
  thanks: "\nThanks for using the Simple Command Line Calculator!",
  errors: {
    missingInput:
      "Error! You must pass at least one valid number and one operation.",
    invalidOperation: "Error! You must enter a valid operation.",
    missingNumber: "Error! You must pass at least 1 valid number.",
    negativeRoot: "Error! For root, you must not pass a negative number",
    invalidThirdParam:
      "Error! Invalid third number or a invalid second operation.",
  },
}

const parseNum = num => {
  if (typeof num === "string") {
    return num.includes(".") ? parseFloat(num) : parseInt(num)
  }
  return num
}

/**
 * Validates the input parameters for the calculator
 * @returns {string|null} Error message or null if valid
 */
const validateInput = (a, operation1, b, operation2, c) => {
  if (!a && !b && !c) return MESSAGES.errors.missingInput
  if (!operation1) return MESSAGES.errors.invalidOperation
  if (!a) return MESSAGES.errors.missingNumber
  return null
}

/**
 * Handles operations with two numbers
 */
const handleTwoNumberOperation = (a, operation1, b) => {
  const op = OPERATIONS[operation1]

  // Handle root operation separately
  if (operation1 === "root") {
    if (b) return "Error! For root, you must only pass 1 number"
    if (parseNum(a) < 0) return MESSAGES.errors.negativeRoot
    return `The ${operation1} of ${a} = ${op.fn(parseNum(a))}`
  }

  // Handle other operations
  if (op.requiresTwoNumbers && !b) {
    return `Error! For ${operation1} you must pass 2 valid numbers. ${a} ${operation1} ___?`
  }

  return `${a} ${operation1} ${b} = ${op.fn(parseNum(a), parseNum(b))}`
}

/**
 * Handles operations with three numbers
 */
const handleThreeNumberOperation = (a, operation1, b, operation2, c) => {
  if (!c || !operation2) return MESSAGES.errors.invalidThirdParam

  const parsedA = parseNum(a)
  const parsedB = parseNum(b)
  const parsedC = parseNum(c)

  // Check for negative numbers in root operations
  if (
    (operation1 === "root" || operation2 === "root") &&
    (parsedA < 0 || parsedB < 0)
  ) {
    return MESSAGES.errors.negativeRoot
  }

  // Handle different operation combinations
  const isBasicOp = op =>
    ["plus", "+", "minus", "-", "multiply", "*", "divide", "/"].includes(op)
  const isPowerOp = op => op === "power" || op === "^"

  if (operation1 === "root" && isBasicOp(operation2)) {
    const firstResult = OPERATIONS[operation1].fn(parsedA)
    return `${operation1} of ${a} ${operation2} ${b} = ${OPERATIONS[
      operation2
    ].fn(firstResult, parsedB)}`
  }

  // Handle order of operations
  if (isPowerOp(operation1) && isBasicOp(operation2)) {
    const firstResult = OPERATIONS[operation1].fn(parsedA, parsedB)
    return `${a} ${operation1} ${b} ${operation2} ${c} = ${OPERATIONS[
      operation2
    ].fn(firstResult, parsedC)}`
  }

  if (isPowerOp(operation2) && isBasicOp(operation1)) {
    const secondResult = OPERATIONS[operation2].fn(parsedB, parsedC)
    return `${a} ${operation1} ${b} ${operation2} ${c} = ${OPERATIONS[
      operation1
    ].fn(parsedA, secondResult)}`
  }

  if (
    ["plus", "+", "minus", "-"].includes(operation1) &&
    ["multiply", "*", "divide", "/"].includes(operation2)
  ) {
    const secondResult = OPERATIONS[operation2].fn(parsedB, parsedC)
    return `${a} ${operation1} ${b} ${operation2} ${c} = ${OPERATIONS[
      operation1
    ].fn(parsedA, secondResult)}`
  }

  // Default case: evaluate left to right
  const firstResult = OPERATIONS[operation1].fn(parsedA, parsedB)
  return `${a} ${operation1} ${b} ${operation2} ${c} = ${OPERATIONS[
    operation2
  ].fn(firstResult, parsedC)}`
}

const mathify = (a, operation1, b, operation2, c) => {
  const validationError = validateInput(a, operation1, b, operation2, c)
  if (validationError) {
    return `${MESSAGES.welcome}\n${validationError}`
  }

  let result
  if (!c && !operation2) {
    result = handleTwoNumberOperation(a, operation1, b)
  } else {
    result = handleThreeNumberOperation(a, operation1, b, operation2, c)
  }

  return `${MESSAGES.welcome}\n${result}${MESSAGES.thanks}`
}

export { mathify }
