// A place to multiply two large numbers
// *************************************

//returns a large string but loses accuracy over 16 digits or so

// const multiply = (a, b) => {
//   let num = a * b;
//   const toFix = num => {
//     let string = "";
//     do {
//       let a = num % 10;
//       num = Math.trunc(num / 10);
//       string = a + string;
//     } while (num > 0);
//     return string;
//   };
//   return toFix(num);
// };

// trying with return strings to an array
// function multiply(a, b) {
//   const product = Array(a.length + b.length).fill(0);
//   for (let i = a.length; i--; null) {
//     let carry = 0;
//     for (let j = b.length; j--; null) {
//       product[1 + i + j] += carry + a[i] * b[j];
//       carry = Math.floor(product[1 + j + i] / 10);
//       product[1 + i + j] = product[1 + i + j] % 10;
//     }
//     product[i] += carry;
//   }
//   return product.join("").replace(/^0*(\d)/, "$1");
// }

// //working with above code
// console.log(multiply("3465657577757757778799997997965665454777", "5980800080800800677565658688887899808776765566"));

// trying with BigNumber, works but doesn't return all the numbers, starts giving scientific notation ater about 15 digits
const BigNumber = require("bignumber.js")

function multiply(a, b) {
  return (new BigNumber(a) * new BigNumber(b)).toString()
}

console.log(
  multiply(
    "3465657577757757778799997997965665454777",
    "5980800080800800677565658688887899808776765566"
  )
)
// expect 2.07274051210815e+85
