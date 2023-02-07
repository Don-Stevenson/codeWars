const assert = require("assert")

const { nextLetter } = require("../nextLetter")

describe("next letter", () => {
    assert.deepStrictEqual("f to return g", () => assert.deepStrictEqual(
        anagrams("f"), "g"
    ))
})