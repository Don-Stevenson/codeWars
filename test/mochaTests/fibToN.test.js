const { fib, getPostiveFib } = require("../fibToN")

const assert = require("assert")

describe("fib", () => {
  it("12 should return 144", () => assert.deepStrictEqual(fib(12), 144))
  it("-12 should return -144", () => assert.deepStrictEqual(fib(-12), -144))
})

describe("Positive fib", () => {
  it("15 should return 610", () =>
    assert.deepStrictEqual(getPostiveFib(15), 610))

  it("17 should return 1597", () =>
    assert.deepStrictEqual(getPostiveFib(17), 1597))

  it("20 should return 6765", () =>
    assert.deepStrictEqual(getPostiveFib(20), 6765))
})
