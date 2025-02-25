const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
]

function getRandomResponse(responses) {
  const randomIndex = Math.floor(Math.random() * responses.length)
  return responses[randomIndex]
}

function formatResponse(question, answer) {
  return `
    Welcome to Renice's Magic 8 ball
    You asked: ${question}

    The mythical 8 ball has determined:
    ${answer}
    `
}

const question = process.argv[2]
const answer = getRandomResponse(responses)
console.log(formatResponse(question, answer))
