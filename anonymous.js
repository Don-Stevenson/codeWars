// a named function
function doesFoo() {
  console.log("foo")
}

doesFoo()
// expect foo

// anonmyous function stored in a variable called didFoo
const didFoo = function() {
  console.log("did foo")
}

didFoo()
// expect did foo

// anonymous arrow function stored in a variable called jim
const jim = () => {
  console.log("I'm jim")
}

jim()
// expect I'm jim

function sixThousand$() {
  console.log("You just cost me 6 thousand dollars")
}

sixThousand$()

// higher order function that takes in and runs an anonymous function
const useAnon = funct => {
  funct()
}

useAnon(() => console.log("hi there"))
// expect hi there

//trying an anonmyous function inside a console log

console.log(() => console.log("Im here"))
// expect [function]

//trying an anonmyous function

//  () => {console.log("Im here")}
// expect nothing because it is never called
