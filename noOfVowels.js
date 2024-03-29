// const numberOfVowels = input => {
//   let vowelNum = 0
//   for (let i = 0; i < input.length; i++) {
//     if (
//       input[i] === "a" ||
//       input[i] === "e" ||
//       input[i] === "i" ||
//       input[i] === "o" ||
//       input[i] === "u"
//     ) {
//       vowelNum++
//     }
//   }
//   return vowelNum
// }

const vowels = ["a", "e", "i", "o", "u"]
//  with filter
// const numberOfVowels = input =>
//   input.split("").filter(letter => {
//     return vowels.includes(letter)
//   }).length

//  with reduce
// const numberOfVowels = input =>
//   input.split("").reduce((acc, letter) => {
//     return vowels.includes(letter) ? acc + 1 : acc
//   }, 0)

// // with map
// const numberOfVowels = input =>
//   input
//     .split("")
//     .map(letter => {
//       return vowels.includes(letter) ? 1 : 0
//     })
//     .reduce((acc, num) => {
//       return acc + num
//     }, 0)

// with forEach
const numberOfVowels = input => {
  let vowelNum = 0
  input.split("").forEach(letter => {
    if (vowels.includes(letter)) {
      vowelNum++
    }
  })
  return vowelNum
}

console.log(numberOfVowels("orange")) // => 3
console.log(numberOfVowels("lighthouse labs")) // => 5
console.log(numberOfVowels("aeiou")) // => 5
