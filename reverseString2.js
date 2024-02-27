// const reverseString = (string) => {
//     let stringThatIsReversed = []
//     for (let i = string.length; i >= 0; i--) {
//         stringThatIsReversed.push(string[i])
//     }
//     return stringThatIsReversed.join("")
// }

const reverseString = str =>
  str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0)

console.log(reverseString("tame children"))
// expect ==> nerdlihc emat

console.log(reverseString("racecar"))
// expect ==> racecar
console.log(reverseString("dumbo"))
// expect ==> obmud

console.log(reverseString("Plum"))
// expect ==> mulP

console.log(reverseString("plumulp"))
// expect ==> plumulp

console.log(reverseString("pumpkin"))
// expect ==> nikpmup

console.log(reverseString("amanacanalpanama"))
// expect ==> amanacanalpanama

console.log(reverseString("tacocat"))
// expect ==> tacocat

const reverseString2 = str => {
  let reversed = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}

console.log("2 ", reverseString2("tame children"))

const reverseString3 = str => str.split("").reverse().join("")

console.log("3 ", reverseString3("tame children"))
// expect ==> 3 nerdlihc emat

const reverseString4 = str => str.split("").reverse().join("")

console.log("4 ", reverseString4("tame children"))
// expect ==> 4 nerdlihc emat

const reverseString5 = str =>
  str
    .split("")
    .map((_, i) => str[str.length - 1 - i])
    .join("")

console.log("5 ", reverseString5("tame children"))
// expect ==> 5 nerdlihc emat

const reverseString6 = str =>
  str.split("").reduce((reversed, character) => character + reversed, "")
// reversed is the accumulator and character is the current value

console.log("6 ", reverseString6("tame children"))
// expect ==> 6 nerdlihc emat

const reverseString7 = str => {
  let reversed = ""
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed
}

console.log("7 ", reverseString7("tame children"))
// expect ==> 7 nerdlihc emat

const reverseString8 = str => {
  let stringThatIsReversed = []
  for (let i = str.length; i >= 0; i--) {
    stringThatIsReversed.push(str[i])
  }
  return stringThatIsReversed.join("")
}

console.log("8 ", reverseString8("tame children"))
// expect ==> 8 nerdlihc emat

const reverseString9 = str =>
  str.match(/./g).reduce((acc, char) => char + acc, "")

console.log("9 ", reverseString9("tame children"))
// expect ==> 9 nerdlihc emat

const reverseString10 = str => {
  str = str.split("")
  let result = ""
  while (str.length) {
    result += str.pop()
  }
  return result
}

console.log("10 ", reverseString10("tame children"))
// expect ==> 10 nerdlihc emat

const reverseString11 = str => {
  let reversed = ""
  for (const letter of str) {
    reversed = letter + reversed
  }
  return reversed
}

console.log("11 ", reverseString11("tame children"))
// expect ==> 11 nerdlihc emat
