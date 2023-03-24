const assert = require("assert")

describe("Array #indexOf()", () => {
  it("should return -1 when the value is not present", () =>
    assert.equal([1, 2, 3].indexOf(7), -1))
  it("should return 1 when the number 2 is indexed", () =>
    assert.equal([1, 2, 3].indexOf(2), 1))
  it("should NOT return 3 when the number 2 is indexed", () =>
    assert.notEqual([1, 2, 3].indexOf(2), 3))
  it("should NOT return 4 when the number 3 is indexed", () =>
    assert.notEqual([1, 2, 3].indexOf(3), 4))
})
