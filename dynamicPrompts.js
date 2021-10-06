const prompts = require('prompts')


// trying out the dynamic questions in prompts
// *******************************************
const questions = [
  {
    type: 'text',
    name: 'dish',
    message: 'Do you like pizza? y or n'
  },
  {
    type: prev => prev === 'y' ? 'text' : null,
    name: 'topping',
    message: 'Name a topping'
  }
];

(async () => {
  const response = await prompts(questions)
})()