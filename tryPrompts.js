const prompts = require("prompts");

const questions = [
  {
    type: "number",
    name: "A",
    message: `
    Welcome to the Simple Multiplication Program!
    Please enter three numbers to be multiplied
    What is the first number?`,
    initial: "Enter a number between 1 and 1000",
    validate: value => {
      if (value > 1000 || value < 0) {
        return "Error!! Please enter a number between 0 and 1000";
      } else return true;
    }
  },
  {
    type: "number",
    name: "B",
    message: "What is the second number?",
    initial: "Enter a number between 1 and 1000",
    validate: value => {
      if (value > 1000 || value < 0) {
        return "Error!! Please enter a number between 0 and 1000";
      } else return true;
    }
  },
  {
    type: "number",
    name: "C",
    message: "What is the third number?",
    initial: "Enter a number between 1 and 1000",
    validate: value => {
      if (value > 1000 || value < 0) {
        return "Error!! Please enter a number between 0 and 1000";
      } else return true;
    }
  }
];

(async () => {
  const response = await prompts(questions);

  console.log(`
    ${response.A} X ${response.B} X ${response.C} = ${
    response.A * response.B * response.C
  }
    Thank you for using The Simple Multiplication Program!!!
    `);
})();
