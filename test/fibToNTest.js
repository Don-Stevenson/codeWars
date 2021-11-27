const { fib, getPostiveFib } = require("../fibToN")

const assert = require("assert")

describe("fib", () => {
  it("12 should return 144", () => {
    assert.deepStrictEqual(fib(12), 144)
  })
  it("-12 should return -144", () => {
    assert.deepStrictEqual(fib(-12), -144)
  })
})

describe("Positive fib", () => {
  it("15 should return 610", () => {
    assert.deepStrictEqual(getPostiveFib(15), 610)
  })
})
