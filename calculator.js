const firstNumber = parseInt(process.argv[2])

const operator = process.argv[3]

const secondNumber = parseInt(process.argv[4])

let answer
if (operator === "+") {
  answer = `${firstNumber + secondNumber}`
}
if (operator === "-") {
  answer = `${firstNumber - secondNumber}`
}
if (operator === "*") {
  answer = `${firstNumber * secondNumber}`
}
if (operator === "/") {
  answer = `${firstNumber / secondNumber}`
}
console.log(`
    Welcome to Lily and Ellis's Calculator!

    The answer to ${firstNumber} ${operator} ${secondNumber} = ${answer}
    `)
