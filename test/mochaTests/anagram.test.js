const assert = require("assert")

const { anagrams } = require("../anagrams")

describe("#anagrams()", () => {
  it("should return an new array that contains only anagrams of the original word", () => {
    assert.deepStrictEqual(
      anagrams("hello", ["hello", "hi", "ehllo", "face", "olelh", "ho"]),
      ["hello", "ehllo", "olelh"]
    )
  })
  it("should return an empty array when there are no anagrams of the original word", () => {
    assert.deepStrictEqual(
      anagrams("hello", ["hgllo", "hi", "ihllo", "face", "plelh", "no"]),
      []
    )
  })
})
