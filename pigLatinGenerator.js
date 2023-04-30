// Function that returns Pig Latin from a given string
// ***************************************************

// with map, test and regex
// ************************

const pigIt = str =>
  str
    .split(" ")
    .map(element =>
      /[a-zA-Z]+/.test(element) ? element.slice(1) + element[0] + "ay" : element
    )
    .join(" ")

// with replace
// where \w is the first character and \w+ is the rest of the word
// which got to $1 and $2 respectively
// ************
// const pigIt = (str) => {return str.replace(/(\w)(\w+)/g, '$2$1ay')};

console.log(pigIt("hello Pig latin is cool")) // => ellohay igPay atinlay siay oolcay
console.log(pigIt("hello my name is Miss Piggy")) // => ellohay ymay amenay siay issMay iggyPay
console.log(pigIt("farenheit 451")) // => arenheitfay 451
console.log(pigIt("No F!!&&in' way dude!")) // => oNay !!&&in'Fay ayway ude!day
