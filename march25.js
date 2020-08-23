// function that reverse str
// with split, reverse and join
//***************************/

// const reverseString = str => {
//   let reverseStr = str
//     .split("")
//     .reverse()
//     .join("");
//   return reverseStr;
// };

// with a c style loop

// const reverseString = str => {
//   if (str === "") return "";
//   else {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       newStr += str[i];
//     }
//     return newStr;
//   }
// };

// with recursion
// **************

const reverseString = str => {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
};

console.log(reverseString("ABCDE"));
