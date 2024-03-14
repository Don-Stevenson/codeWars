const saysHello = () => "hello"

console.log(saysHello())
// expect "hello"

const saysGreeting = greeting => greeting

console.log(saysGreeting("hi"))
// expect "hi"

console.log(saysGreeting("what's up?"))
// expect "what's up?"

const saysGoodbye = (greeting, name) => `${greeting}, ${name}`
console.log(saysGoodbye("goodbye", "Bob"))
// expect "goodbye, Bob"

const saysGoodbyeToEveryone = (greeting, ...names) =>
  names.map(name => `${greeting}, ${name}`)

console.log(saysGoodbyeToEveryone("goodbye", "Bob", "Sue", "Jim"))
// expect ["goodbye, Bob", "goodbye, Sue", "goodbye, Jim"]
