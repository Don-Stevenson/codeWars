const num1 = process.argv[2]
const operator = process.argv[3]
const num2 = process.argv[4]

const addition = (firstNumber, operator, secondnumber) => {
  if (operator === "+") {
    return parseInt(firstNumber) + parseInt(secondnumber)
  }
  if (operator === "-") {
    return parseInt(firstNumber) - parseInt(secondnumber)
  }
  if (operator === "*") {
    return parseInt(firstNumber) * parseInt(secondnumber)
  }
  if (operator === "/") {
    return parseInt(firstNumber) / parseInt(secondnumber)
  }
  return "\x1b[41m that dont work fool"
}

console.log(addition(num1, operator, num2))
