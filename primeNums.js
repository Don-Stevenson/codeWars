// a function that returns all the prime numbers between 1 and n
// *************************************************************

const primeNums = n => {
  // set up an empty array hold the prime numbers
  const result = []
  // C style loop to count from 1 to n
  for (let i = 1; i <= n; i++) {
    // set the counter to 0 for each instance of i
    let counter = 0
    // Nested C style loop that counts down from whatever i is at the moment to 1
    for (let j = i; j >= 1; j--) {
      // check to see if i is divisible by j without remainder, if it is increase the count by 1
      if (i % j === 0) counter++
    }
    // if counter is exactly equal to two, this is a prime number so push it into the results array
    if (counter === 2) result.push(i)
  }
  // return a template literal with the results
  return `There are ${result.length} prime numbers between 1 and ${n}. 

The following is a list of those prime numbers: ${result}
          `
}

// console.log(primeNums(1000))

// checks whether a number is prime or not
//****************************************/

const isPrimeNum = num => {
  // set counter to 0
  let counter = 0
  // count from 0 up to num using a c style loop
  for (let i = 1; i <= num; i++) {
    // if any instance of num is divisble by i without a remainder, incriment the counter
    if (num % i === 0) {
      counter++
    }
  }
  // if counter is exactly equal to 2, a prime number is found
  if (counter === 2) {
    // return true
    return `Yes, ${num} is a prime number`
    // otherwise, num is not a prime number
  } else return `No, ${num} is NOT a prime number`
  // false
}
// console.log(isPrimeNum(6))

// with try prompts
// ****************
import prompts from "prompts"

// question 1 with a validation requirment
// *****************************************

const question = {
  type: "number",
  name: "value",
  message: `Welcome to Check If Prime! 
    (Note: use
     Backspace to delete
     Ctrl + c to quit )
     Please enter a number between 0 and 1,000,000 to be checked: `,
  validate: value => {
    if (value > 1000000 || value < 0 || isNaN(parseFloat(value))) {
      return "Error!! Please enter a whole number between 0 and 1,000,000"
    } else return true
  },
}

// question 2 - continue or not
// ****************************
const question2 = {
  type: "text",
  name: "value",
  message: `continue? y or hit ctrl-c to quit`,
  validate: value => {
    if (value === "y") {
      return questions()
    }
  },
}
// Run the program
// ***************
async function questions() {
  // use ctr-c to cause the following code to run
  //*********************************************
  const onCancel = prompt => {
    console.log("thank you for using Check if Prime. Goodbye")
    return true
  }
  let response = await prompts(question, { onCancel })

  console.log(isPrimeNum(response.value))
  // response = await prompts(question2, { onCancel })
  // console.log(isPrimeNum(response.value))
  // response = await prompts(question2)
}

questions()
