const assert = require("assert")

const { nextLetter } = require("../nextLetter")

describe("next letter", () => {
    it("given f should return g", () => {
        assert.deepStrictEqual(
            nextLetter("f"), "g"
        )
    })
})