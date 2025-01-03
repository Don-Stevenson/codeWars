const firstNumber = parseInt(process.argv[2], 10)
const operator = process.argv[3]
const secondNumber = parseInt(process.argv[4], 10)

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b
    case "-":
      return a - b
    case "*":
      return a * b
    case "/":
      return b !== 0 ? a / b : "Error! division by zero"
    default:
      return "Error! Invalid operator "
  }
}

const answer = calculate(firstNumber, secondNumber, operator)

console.log(`
    Welcome to Lily and Ellis's Calculator!

    The answer to ${firstNumber} ${operator} ${secondNumber} = ${answer}
`)
