// how many possible license plates in Ontario?
const howManyLicensePlates = () => 26 * 26 * 26 * 26 * 10 * 10 * 10
console.log(howManyLicensePlates())

// 14 570 000 million people in ontario
// if each person gets one car, how many cars with different liscense plates can each person own?
console.log(`With 14 570 000 million people in ontario, and approx 456976000 license plates possible given our current format. 
Each person can own max of ${Math.round((456976000 / 14570000))} cars with different license plates`);


// return a string that randomly generates a license plate that is valid in Ontario
const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const licensePlateGen = () => {
    const randNum = () => Math.floor(Math.random() * 10)

    const randomLetter = () => {
        const generatedAlphabetLetter = alphBetStr[Math.floor(Math.random() * 26)]
        return generatedAlphabetLetter ? generatedAlphabetLetter : randomLetter()
    }
    const threeNums = () => `${randNum()}${randNum()}${randNum()}`
    const fourLetters = () => `${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}`

    return `${fourLetters()}-${threeNums()}`
}

console.log(licensePlateGen());