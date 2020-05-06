let args = process.argv.slice(2)



const addTwoNumbers = () => {
  return parseInt(args[0]) + parseInt(args[1])
};

console.log(addTwoNumbers(args));
