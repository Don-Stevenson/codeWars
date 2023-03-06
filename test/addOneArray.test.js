// Testing the function that updates an array's values into a new array by adding one
// **********************************************************************************

const assert = require("assert");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addOne = (groupOfNumbers) => {
  return groupOfNumbers.map((element) => element + 1)
}

describe("#addOne()", () => {
  it("should return an new array that adds one to each element", () =>
    assert.deepEqual(addOne(array), [2, 3, 4, 5, 6, 7, 8, 9, 10]))

  it("should NOT equal an array of the same integers", () =>
    assert.notDeepEqual(addOne(array), [1, 2, 3, 4, 5, 6, 7, 8, 9]))

  it("should NOT equal an array of the of '-1' integers", () =>
    assert.notDeepEqual(addOne(array), [0, 1, 2, 3, 4, 5, 6, 7, 8]))
})
