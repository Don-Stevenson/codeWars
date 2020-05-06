let args = process.argv.slice(2)



const addTwoNumbers = () => {
  return args[0] + args[1]
};

console.log(addTwoNumbers(args));
