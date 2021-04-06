// Testing the function that updates an array's values into a new array by adding one
// **********************************************************************************

const assert = require("assert");

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addOne = (groupOfNumbers) => {
  return groupOfNumbers.map((element) => element + 1);
};


describe("Array", () => {
  describe("#addOne()", () => {
    it("should return an new array that adds one to each element", () => {
      assert.deepEqual(addOne(array), [2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
