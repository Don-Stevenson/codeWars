const assert = require("assert")

describe("Array #indexOf()", () => {
  it("should return -1 when the value is not present", () =>
    assert.equal([1, 2, 3].indexOf(7), -1)
  )
  it("should return 1 when the number 2 is indexed", () =>
    assert.equal([1, 2, 3].indexOf(2), 1)
  )
})
