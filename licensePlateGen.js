const alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// return a string that randomly generates a license plate that is valid in Ontario

const licensePlateGen = () => {
    const randAlphaNum = () => Math.floor(Math.random() * 28)
    const randNum = () => Math.floor(Math.random() * 10)
    const threeLicensePlateNums = () => `${randNum()}${randNum()}${randNum()}`



    return `ABCD-${threeLicensePlateNums()}`
}

console.log(licensePlateGen());