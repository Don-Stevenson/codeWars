const prompts = require("prompts");

const questions = [
  {
    type: "text",
    name: "operator",
    message: `
    Welcome to the Simple Math Program!
    Please enter two numbers to be calculated
    Please chose an operator( +, -, *, / )?`,
    validate: value => {
      if (value === "+" || value === "-" || value === "*" || value === "/") {
        return true;
      } else return "Error!! Please use only +, -, *, /";
    }
  },
  {
    type: "number",
    name: "B",
    message: "  Enter a number between 1 and 1000",
    initial: "Enter value here",
    validate: value => {
      if (value > 1000 || value < 0 || isNaN(parseFloat(value))) {
        return "Error!! Please enter a number between 0 and 1000";
      } else return true;
    }
  },
  {
    type: "number",
    name: "C",
    message: "  Enter a second number between 1 and 1000",
    initial: "Enter value here",
    validate: value => {
      if (value > 1000 || value < 0 || isNaN(parseFloat(value))) {
        return "Error!! Please enter a number between 0 and 1000";
      } else return true;
    }
  }
];

(async () => {
  const response = await prompts(questions);
  let answer;

  // operator selection logic with switch statements
  //*************************************************/
  switch (response.operator) {
    case "+":
      answer = response.B + response.C;

      break;
    case "-":
      answer = response.B - response.C;

      break;
    case "*":
      answer = response.B * response.C;

      break;

    case "/":
      answer = response.B / response.C;

      break;
  }
  // With if else statements
  //*************************/
  // if (response.operator === "+") {
  //   answer = response.B + response.C;
  // } else if (response.operator === "-") {
  //   answer = response.B - response.C;
  // } else if (response.operator === "*") {
  //   answer = response.B * response.C;
  // } else {
  //   answer = response.B / response.C;
  // }
  let output = `
    ${response.B} ${response.operator} ${response.C} = ${answer}

    Thank you for using The Simple Math Program!!!
    `;
  console.log(output);
})();
