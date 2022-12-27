const { doPointsOverlap } = require("../overlappinArrays.js")

const arrOfPoints = [2, 4, 55, 68] // false
const arrOfPoints2 = [2, 5, 3, 6] // true
const arrOfPoints3 = [1, 2, 2, 6] // true
const arrOfPoints4 = [1, 1, 3, 4] // false
const arrOfPoints5 = [0, 0, 0, 0] // true


const assert = require("assert")

describe("test doPointsOverlap", () => {
    it("[0,0,0,0] should return true", () => {
        assert.deepStrictEqual(doPointsOverlap([0, 0, 0, 0]), true)
    })
    it("[1, 1, 3, 4] should return false", () => {
        assert.deepStrictEqual(doPointsOverlap([1, 1, 3, 4]), false)
    })
    it("[1, 2, 2, 6] should return true", () => {
        assert.deepStrictEqual(doPointsOverlap([1, 2, 2, 6]), true)
    })
    it("[2, 5, 3, 6] should return true", () => {
        assert.deepStrictEqual(doPointsOverlap([2, 5, 3, 6]), true)
    })
    it("[2, 4, 55, 68] shoukd return false", () => assert.deepStrictEqual(doPointsOverlap([2, 4, 55, 68]), false))
})

