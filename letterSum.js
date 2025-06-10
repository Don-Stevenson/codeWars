// Challenge
// *************************
// Assign every lowercase letter a value, from 1 for a to 26 for z.
// Given a string of lowercase letters, find the sum of the values of the letters in the string.

// lettersum("") => 0
// lettersum("a") => 1
// lettersum("z") => 26
// lettersum("cab") => 6
// lettersum("excellent") => 100
// lettersum("microspectrophotometries") => 317

// Optional bonus challenges
// *************************
// Use the enable1 word list for the optional bonus challenges.

// microspectrophotometries is the only word with a letter sum of 317.
// Find the only word with a letter sum of 319.

// How many words have an odd letter sum?

// There are 1921 words with a letter sum of 100, making it the second most common letter sum.
// What letter sum is most common, and how many words have it?

// zyzzyva and biodegradabilities have the same letter sum as each other (151),
// and their lengths differ by 11 letters. Find the other pair of words with
// the same letter sum whose lengths differ by 11 letters.

// cytotoxicity and unreservedness have the same letter sum as each other (188),
// and they have no letters in common. Find a pair of words that have no letters in common,
// and that have the same letter sum, which is larger than 188.
// (There are two such pairs, and one word appears in both pairs.)

// The list of word { geographically, eavesdropper, woodworker, oxymorons } contains 4 words.
// Each word in the list has both a different number of letters, and a different letter sum.
// The list is sorted both in descending order of word length, and ascending order of letter sum.
// What's the longest such list you can find?

const letterValues = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
}

const letterSum = str => {
  let total = 0
  str
    .toLowerCase()
    .split("")
    .map(e => {
      if (typeof e === "string") total += letterValues[e]
    })
  return total
}

// tests
// *****

console.log(letterSum("cab")) // => 6
console.log(letterSum("z")) // => 26
console.log(letterSum("")) // => 0
console.log(letterSum("excellent")) // => 100
console.log(letterSum("microspectrophotometries")) // => 317
console.log(letterSum("supercalifragilisticexpialidocious")) // => 379
console.log(letterSum("12")) // => NaN
console.log(letterSum("&*")) // => NaN
console.log(letterSum("Hi&*")) // => NaN
console.log(letterSum("ddd---")) // => NaN
console.log(letterSum("test")) // => 64
console.log(letterSum("hello")) // => 52
console.log(letterSum("moto")) // => 63
console.log(letterSum("antidisestablishmentarianism")) // => 307
console.log(letterSum("stuff")) // => 72
console.log(letterSum("made")) // => 23
console.log(letterSum("here")) // => 36
