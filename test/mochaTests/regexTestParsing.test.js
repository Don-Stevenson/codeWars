// const { fib, getPostiveFib } = require("../fibToN")
const { parseLabel, lines } = require("../../regexTextParsing.js")
const test = require("tape")
const assert = require("assert")

test("#addOne()", () => {
  it("should return an new array that adds one to each element", () =>
    assert.deepEqual(parseLabel(lines), [2, 3, 4, 5, 6, 7, 8, 9, 10]))
})
