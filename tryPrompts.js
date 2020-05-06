const prompts = require('prompts');
 
const questions = [
  {
    type: 'number',
    name: 'A',
    message: 'What is the first number',
    initial: 'Enter a number between 1 and 1000000',
    validate: value => value === typeof(1) ? true : "please enter a number"
  },
  {
    type: 'number',
    name: 'B',
    message: 'What is the second number',
    initial: 'Enter a number between 1 and 1000000',
    validate: value => value === typeof(1) ? true : "please enter a number"
  },
];
 
(async () => {
  const response = await prompts(questions);
 
  console.log(`The answer for ${response.A} X ${response.B} is:`, response.A * response.B)
})();