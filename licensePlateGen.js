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