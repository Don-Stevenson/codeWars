const randomNumberGenerator = () => Math.floor(Math.random() * 30)

function iansCalculator(num1, operator, num2) {
  const randomNumber = randomNumberGenerator()
  let answerInsideFunction
  if (randomNumber === 10) {
    if (operator === "+") {
      answerInsideFunction = `Hooray! \n\n your answer is: ${
        parseInt(num1) + parseInt(num2)
      }`
    } else if (operator === "-") {
      answerInsideFunction = `Hooray! \nyour answer is: ${
        parseInt(num1) - parseInt(num2)
      }`
    } else if (operator === "*") {
      answerInsideFunction = `Hooray! \nyour answer is: ${
        parseInt(num1) * parseInt(num2)
      }`
    } else if (operator === "/") {
      answerInsideFunction = `Hooray! \nyour answer is: ${
        parseInt(num1) / parseInt(num2)
      }`
    } else answerInsideFunction = "that don't work fool"
  } else {
    answerInsideFunction = randomNopeGenerator()
  }

  return (document.getElementById("answer1").innerHTML = answerInsideFunction)
}

function randomNopeGenerator() {
  const noArray = [
    "nu-uh",
    "nope",
    "no way",
    "not happening",
    "no",
    "yeah, no way jose",
    "okay, no",
    "nope, nope, nope",
    "nope, not today",
    "nope, not now",
    "nope, not ever",
    "nope, not a chance",
    "nope, not even close",
    "nope, not even a little",
    "nope, not even a smidge",
    "nope, not even a bit",
    "nope, not even a little bit",
    "uh, no",
    "never",
    "ah, no",
    "no way, jose",
    "no way, not today",
  ]
  return noArray[Math.floor(Math.random() * noArray.length)]
}
