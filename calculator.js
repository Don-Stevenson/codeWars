const firstNumber = parseInt(process.argv[2], 10)
const operator = process.argv[3]
const secondNumber = parseInt(process.argv[4], 10)

console.log({ operator })

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
    case "3xplus1.js":
      return `Error: please use \\ to escape the * sign`
    default:
      return "Error! Invalid operator "
  }
}

const answer = calculate(firstNumber, secondNumber, operator)

const displayAnswer = answer => {
  if (typeof answer === "string") {
    console.log("Error please try again")
  } else
    console.log(`
    Welcome to Lily and Ellis's Calculator!
    
    The answer to ${firstNumber} ${operator} ${secondNumber} = ${answer}
    `)
}
displayAnswer(answer)
