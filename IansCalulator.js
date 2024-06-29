function iansCalculator(num1, operator, num2) {
  let answerInsideFunction
  if (operator === "+") {
    answerInsideFunction = parseInt(num1) + parseInt(num2)
  } else if (operator === "-") {
    answerInsideFunction = parseInt(num1) - parseInt(num2)
  } else if (operator === "*") {
    answerInsideFunction = parseInt(num1) * parseInt(num2)
  } else if (operator === "/") {
    answerInsideFunction = parseInt(num1) / parseInt(num2)
  } else answerInsideFunction = "that don't work fool"

  return (document.getElementById("answer").innerHTML = answerInsideFunction)
}
