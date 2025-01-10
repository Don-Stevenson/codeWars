const OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b !== 0 ? a / b : null),
}

const APP_NAME = "Lily and Ellis's Calculator"

const parseArguments = () => {
  const [firstNumber, operator, secondNumber] = process.argv.slice(2)

  return {
    firstNumber: parseInt(firstNumber, 10),
    operator,
    secondNumber: parseInt(secondNumber, 10),
  }
}

const validateInput = (firstNumber, operator, secondNumber) => {
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error("Please provide valid numbers")
  }

  if (!OPERATORS.hasOwnProperty(operator)) {
    if (operator === "3xplus1.js") {
      throw new Error("Please use \\ to escape the * sign")
    }
    throw new Error("Invalid operator. Please use +, -, *, or /")
  }
}

const calculate = (firstNumber, operator, secondNumber) => {
  validateInput(firstNumber, operator, secondNumber)

  const result = OPERATORS[operator](firstNumber, secondNumber)

  if (result === null) {
    throw new Error("Division by zero is not allowed")
  }

  return result
}

const formatResult = (firstNumber, operator, secondNumber, result) =>
  `The answer to ${firstNumber} ${operator} ${secondNumber} = ${result}`

const runProgram = () => {
  console.log(`Welcome to ${APP_NAME}!\n`)

  try {
    const { firstNumber, operator, secondNumber } = parseArguments()
    const result = calculate(firstNumber, operator, secondNumber)
    console.log(formatResult(firstNumber, operator, secondNumber, result))
  } catch (error) {
    console.error(error.message)
  }
}

runProgram()
