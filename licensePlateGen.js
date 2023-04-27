const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const alphaBet = new Set("abcdefghijklmnopqrstuvwxyz")
// return a string that randomly generates a license plate that is valid in Ontario

const licensePlateGen = () => {
    const randAlphaNum = () => Math.floor(Math.random() * 28)
    const randNum = () => Math.floor(Math.random() * 10)

    const threeNums = () => `${randNum()}${randNum()}${randNum()}`
    const randomLetter = () => alphBetStr[randAlphaNum()]
    const fourLetters = () => `${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}`
    return `${fourLetters()}-${threeNums()}`
}

console.log(licensePlateGen());