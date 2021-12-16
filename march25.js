// function that reverse str
// with split, reverse and join
// ***************************

const reverseStringSplitRerverseJoin = str => {
  let reverseStr = str.split("").reverse().join("")
  return reverseStr
}

// console.log(reverseStringSplitRerverseJoin("ABCDE"))
// expect EDCBA

// with a c style loop

const reverseStringCStyleLoop = str => {
  if (str === "") return ""
  else {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i]
    }
    return newStr
  }
}

// console.log(reverseStringCStyleLoop("ABCDE"))
// expect EDCBA

// with recursion
// **************

const reverseStringRecursion = str =>
  str === "" ? "" : reverseStringRecursion(str.substr(1)) + str.charAt(0)

console.log(reverseStringRecursion("ABCDE"))
// expect EDCBA
