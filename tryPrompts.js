const prompts = require("prompts");

// Validate function that makes sure that the number is between 0 and 1000.
// Reject an empty value
//************************************************************************/

const validateNum = value => {
  if (value > 10000 || value < 0 || isNaN(parseFloat(value))) {
    return "Error!! Please enter a whole number between 0 and 10000";
  } else return true;
};

const questions = [
  // questions for the program to use
  // questions have a type,
  // a name to call it later,
  // a message to prompt the user,
  // and a validation field to limit the material that is possible to enter
  //********************************/

  // Question 1
  //************/
  {
    type: "text",
    name: "operator",
    message: `
    Welcome to the Simple Math Program!
    Please enter two numbers to be calculated (Note: only the first will be used for square root)
    Please chose an operator( +, -, *, /, power, sqrt )?`,
    // check to see what the operator is. Reject all other characters
    //***************************************************************/
    validate: value => {
      if (
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/" ||
        value === "power" ||
        value === "sqrt"
      ) {
        return true;
      }  return "Error!! Please use only +, -, *, /, power, sqrt";
    }
  },
 

  // Question 2
  // **********
  {
    type: prev => prev === !null ? 'text' : null,
    name: "B",
    message: "  Enter a whole number between 1 and 10000",
    initial: "Enter value here",
    validate: value => validateNum(value)
  },
  // Question 3
  // **********
  {
    type: "number",
    name: "C",
    message: "  Enter a second whole number between 1 and 10000",
    initial: "Enter value here",
    validate: value => validateNum(value)
  }
];

// Run the program
//*****************/
(async () => {
  const response = await prompts(questions);

  // operations in an object
  //***********************/
  const operations = {
    "+": response.B + response.C,
    "-": response.B - response.C,
    "*": response.B * response.C,
    "/": response.B / response.C,
    "power": Math.pow(response.B, response.C),
    "sqrt": Math.sqrt(response.B)
  };

  // using object oriented programming instead of IF/ELSE or SWITCH
  // ***************************************************************/
  let answer = operations[response.operator];

  // operator selection logic with switch statements
  //*************************************************/
  // switch (response.operator) {
  //   case "+":
  //     answer = response.B + response.C;
  //     break;
  //   case "-":
  //     answer = response.B - response.C;
  //     break;
  //   case "*":
  //     answer = response.B * response.C;
  //     break;
  //   case "/":
  //     answer = response.B / response.C;
  //     break;
  // }

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
  if (response.operator === "sqrt") {
    //Setting up output to display the expression and answer when sqrt is seelected
    // and give the user a simple message to say thanks
    //*****************************************************/
    let output = `
      ${response.B} ${response.operator} = ${answer}
  
      Thank you for using The Simple Math Program!!!
      `;
    console.log(output);
  } else {
  //Setting up output to display the expression and answer
    // and give the user a simple message to say thanks
    //*****************************************************/
    let output = `
      ${response.B} ${response.operator} ${response.C} = ${answer}
  
      Thank you for using The Simple Math Program!!!
      `;
    console.log(output);
  }
})();
