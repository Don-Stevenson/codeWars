// function that reverse str
// with split, reverse and join
//***************************/

// const reverseString = str => str.split("").reverse().join("")

// with a c style loop
// *******************

// const reverseString = str => {
//   let newStr = ""
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }
//   return newStr
// }

// with recursion
// **************

const reverseString = str =>
  str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0)

console.log(reverseString("12345")) // => 54321
