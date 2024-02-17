// const reverseString = (string) => {
//     let stringThatIsReversed = []
//     for (let i = string.length; i >= 0; i--) {
//         stringThatIsReversed.push(string[i])
//     }
//     return stringThatIsReversed.join("")
// }

const reverseString = string =>
  string === "" ? "" : reverseString(string.substr(1)) + string.charAt(0)

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

const reverseString2 = string => {
  let reversed = ""
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }
  return reversed
}

const reverseString3 = str => str.split("").reverse().join("")

console.log("3 ", reverseString3("tame children"))
// expect ==> nerdlihc emat

const reverseString4 = str => str.split("").reverse().join("")

console.log("4 ", reverseString4("tame children"))
// expect ==> nerdlihc emat

const reverseString5 = str =>
  str
    .split("")
    .map((_, i) => str[str.length - 1 - i])
    .join("")

console.log("5 ", reverseString5("tame children"))
// expect ==> nerdlihc emat

const reverseString6 = str =>
  str.split("").reduce((reversed, character) => character + reversed, "")
// reversed is the accumulator and character is the current value

console.log("6 ", reverseString6("tame children"))
// expect ==> nerdlihc emat

const reverseString8 = str => {
  let reversed = ""
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed
}

console.log("8 ", reverseString8("tame children"))
// expect ==> nerdlihc emat

const reverseString9 = string => {
  let stringThatIsReversed = []
  for (let i = string.length; i >= 0; i--) {
    stringThatIsReversed.push(string[i])
  }
  return stringThatIsReversed.join("")
}

console.log("9 ", reverseString9("tame children"))
// expect ==> nerdlihc emat
