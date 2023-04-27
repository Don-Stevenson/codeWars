const alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// return a string that randomly generates a license plate that is valid in Ontario

const licensePlateGen = () => {
    const randAlphaNum = () => Math.floor(Math.random() * 28)
    const randNum = () => Math.floor(Math.random() * 10)
    const threeNums = () => `${randNum()}${randNum()}${randNum()}`
    const randomLetter = () => alphaArr[randAlphaNum()].toUpperCase()
    const fourLetters = () => `${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}`
    return `${fourLetters()}-${threeNums()}`
}

console.log(licensePlateGen());