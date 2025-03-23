const CALCULATOR_SETTINGS = {
  luckyNumber: 10,
  randomRange: 30,
  messages: {
    invalidOperator: "that don't work fool",
    successPrefix: "Hooray!",
  },
}

const MATH_OPERATIONS = {
  "+": (firstNum, secondNum) => firstNum + secondNum,
  "-": (firstNum, secondNum) => firstNum - secondNum,
  "*": (firstNum, secondNum) => firstNum * secondNum,
  "/": (firstNum, secondNum) => firstNum / secondNum,
}

const generateRandomNumber = () =>
  Math.floor(Math.random() * CALCULATOR_SETTINGS.randomRange)

const createSuccessMessage = calculationResult => {
  return `${CALCULATOR_SETTINGS.messages.successPrefix}\n\nyour answer is: ${calculationResult}`
}

function calculateWithRandomChance(firstNumber, operatorSymbol, secondNumber) {
  const currentRandomNumber = generateRandomNumber()

  if (currentRandomNumber === CALCULATOR_SETTINGS.luckyNumber) {
    const parsedFirstNumber = parseInt(firstNumber)
    const parsedSecondNumber = parseInt(secondNumber)

    const selectedOperation = MATH_OPERATIONS[operatorSymbol]
    if (!selectedOperation) return CALCULATOR_SETTINGS.messages.invalidOperator

    const calculationResult = selectedOperation(
      parsedFirstNumber,
      parsedSecondNumber
    )
    return (document.getElementById("answer1").innerHTML =
      createSuccessMessage(calculationResult))
  }

  return (document.getElementById("answer1").innerHTML =
    generateRandomDenialMessage())
}

function generateRandomDenialMessage() {
  const denialMessages = [
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
  return denialMessages[Math.floor(Math.random() * denialMessages.length)]
}
