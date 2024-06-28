const num1 = process.argv[2]
const operator = process.argv[3]
const num2 = process.argv[4]

if (operator === "+") {
  console.log(parseInt(num1) + parseInt(num2))
} else if (operator === "-") {
  console.log(parseInt(num1) - parseInt(num2))
} else if (operator === "*") {
  console.log(parseInt(num1) * parseInt(num2))
} else if (operator === "/") {
  console.log(parseInt(num1) / parseInt(num2))
} else console.log("\x1b[41m that don't work fool")
