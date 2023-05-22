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
