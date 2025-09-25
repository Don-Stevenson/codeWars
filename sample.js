// let a = 1234
// reverse a number and store in let b= 4321 without using any string, char, array function

let a = 1234

const thousands = a % 10000

const hundreds = a % 1000

const tens = a % 100

const ones = a % 10

let b = 0
while (a > 0) {
  b = (a % 10) + b * 10
  a = Math.round(a / 10)
}
console.log(b)
