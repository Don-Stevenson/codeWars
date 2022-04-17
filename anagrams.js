// function that checks a word against an array of submitted words
// It returns an array of anagrams of the submitted word
// that match the array of submitted potenial anagagram words
// face + [acef, feca, jerry, fac ] =>  [acef, feca]
// *******************************************************

// const anagrams = (word, inputWords) => {
//   const wordSorted = word.split("").sort().join("")
//   let anagramArr = []
//   for (const word of inputWords) {
//     const wordsSorted = word.split("").sort().join("")
//     if (wordSorted === wordsSorted) {
//       anagramArr.push(word)
//     }
//   }
//   return anagramArr
// }

// with filter
const anagrams = (word, inputWords) => {
  const inputWordSorted = word.split("").sort().join("")
  return inputWords.filter(element => element.split("").sort().join("") === inputWordSorted) 

}

console.log(anagrams("hello", ["hello", "hi", "ehllo", "face", "olelh", "ho"]))
// expect [ 'hello', 'ehllo', 'olelh' ]

module.exports = { anagrams }
