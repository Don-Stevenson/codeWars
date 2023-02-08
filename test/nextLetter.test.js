const assert = require("assert")

const { nextLetter } = require("../nextLetter")

describe("next letter", () => {
    it("given f should return g", () => {
        assert.deepStrictEqual(
            nextLetter("f"), "g"
        )
    })
    it("given h should return i", () => {
        assert.deepStrictEqual(
            nextLetter("h"), "i"
        )
    })
    it("given h should return i", () => {
        assert.deepStrictEqual(
            nextLetter("z"), undefined
        )
    })
})