// how many possible license plates in Ontario?
const howManyLicensePlates = 26 * 26 * 26 * 26 * 10 * 10 * 10

// 14 570 000 million people in ontario
// if each person gets one car, how many cars with different liscense plates can each person own?
console.log(`With 14.57 million people in Ontario, and given our current format approximately 456.976 million license plates possible
, each person currently in Ontario own max of ${Math.round(
  howManyLicensePlates / 14570000
)} cars with different license plates`)
// expect ==> "... Each person can own max of 31 cars with different license plates`"

// return a string that randomly generates a license plate that is valid in Ontario
const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const randNum = () => Math.floor(Math.random() * 10)

const randomLetter = () => {
  const generatedAlphabetLetter = alphBetStr[Math.floor(Math.random() * 26)]
  return generatedAlphabetLetter ? generatedAlphabetLetter : randomLetter()
}

const threeNums = () => `${randNum()}${randNum()}${randNum()}`

const fourLetters = () =>
  `${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}`

const licensePlateGen = () => `${fourLetters()}-${threeNums()}`

console.log(licensePlateGen())
