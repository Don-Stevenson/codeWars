const prompts = require("prompts")

// Validate function that makes sure that the number is between 0 and 1000.
// Reject an empty value
//************************************************************************

const validateNum = value =>
  value > 10000 || value < 0 || isNaN(parseFloat(value))
    ? "Error!! Please enter a whole number between 0 and 10000"
    : true

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
      // logic to evaluate value includes on of the signs in the mathSigns array
      // **********************************************************************
      const mathSigns = ["+", "-", "*", "/", "power", "sqrt"](
        mathSigns.includes(value)
      )
        ? true
        : "Error!! Please use only +, -, *, /, power, sqrt"
    },
  },

  // Question 2 - if the previous question answer is sqrt,
  // then skip this question and go directly to question 3.
  // This is because we only need one number for a sqrt
  // **************************************************
  {
    type: prev => (prev !== "sqrt" ? "number" : null),
    name: "B",
    message: "  Enter a whole number between 1 and 10000",
    initial: "Enter value here",
    validate: value => validateNum(value),
  },
  // Question 3
  // **********
  {
    type: "number",
    name: "C",
    message: "  Enter a whole number between 1 and 10000",
    initial: "Enter value here",
    validate: value => validateNum(value),
  },
](
  // Run the program
  // *****************
  async () => {
    const response = await prompts(questions)

    // operations in an object
    // ***********************
    const operations = {
      "+": response.B + response.C,
      "-": response.B - response.C,
      "*": response.B * response.C,
      "/": response.B / response.C,
      power: Math.pow(response.B, response.C),
      sqrt: Math.sqrt(response.C),
    }

    // using object oriented programming instead of IF/ELSE or SWITCH
    // **************************************************************
    let answer = operations[response.operator]

    // operator selection logic with switch statements
    // *********************** ***********************
    // switch (response.operator) {
    //   case "+":
    //     answer = response.B + response.C
    //     break
    //   case "-":
    //     answer = response.B - response.C
    //     break
    //   case "*":
    //     answer = response.B * response.C
    //     break
    //   case "/":
    //     answer = response.B / response.C
    //     break
    //  case "power":
    //     answer = Math.pow(response.B, response.C)
    //     break
    // case "sqrt":
    //     answer = sqrt: Math.sqrt(response.C)
    //     break
    // }

    // With if else statements
    // ***********************
    // if (response.operator === "+") {
    //   answer = response.B + response.C
    // } else if (response.operator === "-") {
    //   answer = response.B - response.C
    // } else if (response.operator === "*") {
    //   answer = response.B * response.C
    // } else if (response.operator === "/"){
    //   answer = response.B / response.C
    // } else if (response.operator === "power"){
    //   answer = Math.pow(response.B, response.C)
    // } else
    //   answer =  Math.sqrt(response.C)
    // }
    if (response.operator === "sqrt") {
      // Setting up output to display the expression and answer when sqrt is selected
      // and give the user a simple message to say thanks
      // ************************************************
      let output = `
      The square root of ${response.C} = ${answer}
  
      Thank you for using The Simple Math Program!!!
      `
      console.log(output)
    } else {
      // Setting up output to display the expression and answer
      // and give the user a simple message to say thanks
      // ******************************************************
      let output = `
      ${response.B} ${response.operator} ${response.C} = ${answer}
  
      Thank you for using The Simple Math Program!!!
      `
      console.log(output)
    }
  }
)

// Run the program
validateNum()
