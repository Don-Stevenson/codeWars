const sentence = "hello there! This is a typewriter effect! \n"
let count = 0

const randomTime = () => Math.floor(Math.random() * 400)
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, (count += randomTime()))
}
