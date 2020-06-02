// a function that returns all the prime numbers between 1 and n
// *************************************************************

const primeNums = n => {
  // set up an empty array hold the prime numbers
  const result = [];
  // C style loop to count from 1 to n
  for (let i = 1; i <= n; i++) {
    // set the counter to 0 for each instance of i
    let counter = 0;
    // Nested C style loop that counts down from whatever i is at the moment to 1
    for (let j = i; j >= 1; j--) {
      // check to see if i is divisible by j without remainder, if it is increase the count by 1
      if (i % j === 0) counter++;
    }
    // if counter is exactly equal to two, this is a prime number so push it into the results array
    if (counter === 2) result.push(i);
  }
  // return a template literal with the results
  return `There are ${result.length} prime numbers between 1 and ${n}. 

The following is a list of those prime numbers: ${result}
          `;
};

// console.log(primeNums(1000));

// checks whether a number is prime or not
//****************************************/

const isPrimeNum = num => {
  // set counter to 0
  let counter = 0;
  // count from 0 up to num using a c style loop
  for (let i = 1; i <= num; i++) {
    // if any instance of num is divisble by i without a remainder, incriment the counter
    if (num % i === 0) {
      counter++;
    }
  }
  // if counter is exactly equal to 2, a prime number is found
  if (counter === 2) {
    return true;
    // return `${num} is a prime number`;
    // otherwise, num is not a prime number
  } else return false;
  //`${num} is NOT a prime number`;
};
// console.log(isPrimeNum(6));

// with try prompts
// ****************
const prompts = require("prompts");

const validator = num => {
  if (num > 1000000 || num < 0 || isNaN(parseFloat(num))) {
    console.log("here");
    return false;
  } else {
    console.log("here now");
    return true;
  }
};

const question = {
  type: "number",
  name: "value",
  message: `Welcome to Check If Prime! 
    (Note: use
     Backspace to delete
     Enter to try another number
     Ctrl + c to quit )
     Please enter a number between 0 and 1,000,000 to be checked: `,
  validate: value => {
    if (value > 1000 || value < 0 || isNaN(parseFloat(value))) {
      return "Error!! Please enter a whole number between 0 and 1000";
    } else return true;
  }
};

// setup with a callback
// *********************
(async () => {
  const response = await prompts(question);
  isPrimeNum(response)
    ? `Yes ${response} is a prime number `
    : `No, ${response} is not a prime number`;

  console.log(`Thank you for using Check if Prime.`);
  return response;
})();

