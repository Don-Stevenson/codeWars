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
      if (value === "+" || value === "-" || value === "*" || value === "/") {
        return true;
      } else return "Error!! Please use only +, -, *, /";
    }
  },
  {
    type: "number",
    name: "B",
    message: "  What is the first number?",
    initial: "Enter a number between 1 and 1000",
    validate: value => {
      if (value > 1000 || value < 0 || isNaN(parseFloat(value))) {
        return "Error!! Please enter a number between 0 and 1000";
      } else return true;
    }
  },
  {
    type: "number",
    name: "C",
    message: "  What is the second number?",
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
  let answer = 0;
  if (response.operator === "+") {
    answer = response.B + response.C;
  }

  console.log(
    response,
    `
  ${response.B} ${response.operator} ${response.C} = ${
      (answer)
    }
    Thank you for using The Simple Math Program!!!
    `
  );
})();
