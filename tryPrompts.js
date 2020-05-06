const prompts = require("prompts");

const questions = [
  {
    type: "number",
    name: "A",
    message: `
    Welcome to the Simple Multiplication Program!
    Please enter two numbers to be multiplied
    What is the first number?`,
    initial: "Enter a number between 1 and 1000",
    validate: value => {
      if (value > 1000) {
        return "^^^ please enter a number less than 1000";
      } else if (value < 0) {
        return "^^^ please enter a number greater than 0";
      } else return true;
    }
  },
  {
    type: "number",
    name: "B",
    message: "What is the second number?",
    initial: "Enter a number between 1 and 1000000",
    validate: value => {
      if (value > 1000) {
        return "^^^ please enter a number less than 1000";
      } else if (value < 0) {
        return "^^^ please enter a number greater than 0";
      } else return true;
    }
  }
];

(async () => {
  const response = await prompts(questions);

  console.log(
    `
    The answer to the question ${response.A} X ${response.B} is: ${response.A * response.B}
    thank you for using The Simple Multiplication Program!!!
    `
  );
})();
