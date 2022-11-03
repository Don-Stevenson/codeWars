const saysHello = () => "hello"

console.log(saysHello())
// expect "hello"

const saysGreeting = greeting => greeting

console.log(saysGreeting("hi"))
// expect "hi"

console.log(saysGreeting("what's up?"))
// expect "what's up?"
