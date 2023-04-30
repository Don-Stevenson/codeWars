// given a letter, return the next letter in the alphabet
// a => b,  c =>d,  p = q

const alphaArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

const nextLetter = letter => {
  const indexOfNextLetter = alphaArr.indexOf(letter) + 1
  return alphaArr[indexOfNextLetter]
}

module.exports = { nextLetter }
