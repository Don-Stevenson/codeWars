// Multiply with Args
// ******************

// function that multiply with two numbers from the process argv's array.
// *********************************************************************

const args = process.argv.slice(2)

const multiplyTwoNumbers = () =>
  args.length < 2 ? "not enough args" : parseInt(args[0]) * parseInt(args[1])

console.log(multiplyTwoNumbers(args)) /* 3 4 */
// expect 12
