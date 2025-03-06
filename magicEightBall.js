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

class MagicEightBall {
  constructor(responses) {
    this.responses = responses
  }

  getRandomResponse() {
    const randomIndex = Math.floor(Math.random() * this.responses.length)
    return this.responses[randomIndex]
  }

  formatResponse(question, answer) {
    return `
    Welcome to Renice's Magic 8 Ball
    You asked: ${question}

    The mythical 8 ball has determined:
    ${answer}
    `
  }

  shake(question) {
    if (!question || typeof question !== "string") {
      throw new Error("Please ask a valid question!")
    }
    const answer = this.getRandomResponse()
    return this.formatResponse(question, answer)
  }
}

try {
  const question = process.argv[2]
  const magicBall = new MagicEightBall(responses)
  console.log(magicBall.shake(question))
} catch (error) {
  console.error("Error:", error.message)
  process.exit(1)
}
