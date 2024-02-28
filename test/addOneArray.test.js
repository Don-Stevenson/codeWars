// Testing the function that updates an array's values into a new array by adding one
// **********************************************************************************
import { describe, it } from "mocha"
import { addOne, array } from "../addOne.js"

import { deepEqual, notDeepEqual } from "assert"

describe("#addOne()", () => {
  it("should return an new array that adds one to each element", () =>
    deepEqual(addOne(array), [2, 3, 4, 5, 6, 7, 8, 9, 10]))

  it("should NOT equal an array of the same integers", () =>
    notDeepEqual(addOne(array), [1, 2, 3, 4, 5, 6, 7, 8, 9]))

  it("should NOT equal an array of the of '-1' integers", () =>
    notDeepEqual(addOne(array), [0, 1, 2, 3, 4, 5, 6, 7, 8]))

  it("should NOT equal an array of the of '-2' integers", () =>
    notDeepEqual(addOne(array), [-1, 0, 1, 2, 3, 4, 5, 6, 7]))

  it("should NOT equal an array of the of '-3' integers", () =>
    notDeepEqual(addOne(array), [-2, -1, 0, 1, 2, 3, 4, 5, 6]))
})
