const assert = require("assert")

const { nextLetter } = require("../nextLetter")

describe("next letter", () => {
  it("when given 'a', it should return 'b'", () => {
    assert.deepStrictEqual(nextLetter("a"), "b")
  })
  it("when given 'f', it should return 'g'", () => {
    assert.deepStrictEqual(nextLetter("f"), "g")
  })
  it("when given 'h', it should return 'i'", () => {
    assert.deepStrictEqual(nextLetter("h"), "i")
  })
  it("when given 'q', it should return 'r'", () => {
    assert.deepStrictEqual(nextLetter("q"), "r")
  })
  it("when given 'z', it should return 'undefined'", () => {
    assert.deepStrictEqual(nextLetter("z"), undefined)
  })
})
