let args = process.argv.slice(2)

// function that adds two numbers from the process argvs array. Uses node.js to run
const addTwoNumbers = () => {
  return parseInt(args[0]) + parseInt(args[1])
};

console.log(addTwoNumbers(args));
