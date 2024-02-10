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

console.log(reverseString2("tame children"))
// expect ==> nerdlihc emat

const reverseString3 = str => str.split("").reverse().join("")

console.log(reverseString3("tame children"))
// expect ==> nerdlihc emat
