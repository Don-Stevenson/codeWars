const prompts = require("prompts");

const questions = [
  {
    type: "text",
    name: "operator",
    message: `
    Welcome to the Simple Math Program!
    Please enter two numbers to be calculated
    Please chose an operator( +, -, *, / )?`,
    initial: "+, -, x, /",
    validate: value => {
      if (value > 1000 || value < 0 || isNaN(parseFloat(value))) {
        return "Error!! Please use only +, -, *, /";
      } else return true;
    }
  },
  {
    type: "number",
    name: "B",
    message: "  What is the second number?",
    initial: "Enter a number between 1 and 1000",
    validate: value => {
      if (value > 1000 || value < 0 || isNaN(parseFloat(value)) )  {
        return "Error!! Please enter a number between 0 and 1000";
      } else return true;
    }
  },
  {
    type: "number",
    name: "C",
    message: "  What is the third number?",
    initial: "Enter a number between 1 and 1000",
    validate: value => {
      if (value > 1000 || value < 0 || isNaN(parseFloat(value))) {
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
    Thank you for using The Simple Math Program!!!
    `);
})();
