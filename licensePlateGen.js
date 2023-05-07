// how many possible license plates in Ontario?
const howManyLicensePlates = 26 * 26 * 26 * 26 * 10 * 10 * 10
// 14 570 000 million people in ontario
// if each person gets one car, how many cars with different liscense plates can each person own?
console.log(`There are 14.57 million people in Ontario. Given our current format of 'XXXX-000', approximately 456.976 million unique license plates are possible. Thus 
each person currently in Ontario can currently own a max of ${Math.round(
  howManyLicensePlates / 14570000
)} cars with different license plates`)
// expect ==> "... Each person can own max of 31 cars with different license plates`"

// ********************
// return a string that randomly generates a license plate that is valid in Ontario
const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const randNum = () => Math.floor(Math.random() * 10).toString()

const randomLetter = () => alphBetStr[Math.floor(Math.random() * 26)]

const licensePlateGen = () =>
  randomLetter() +
  randomLetter() +
  randomLetter() +
  randomLetter() +
  "-" +
  randNum() +
  randNum() +
  randNum()

console.log(licensePlateGen())
