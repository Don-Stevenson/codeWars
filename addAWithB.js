let args = process.argv.slice(2)

// function that adds two numbers from the process argv's array. Uses node.js to run
// **********************************************************************************
const multiplyTwoNumbers = () => {
  return parseInt(args[0]) * parseInt(args[1])
};

console.log(multiplyTwoNumbers(args));
