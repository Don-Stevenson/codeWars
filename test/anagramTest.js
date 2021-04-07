const assert = require("assert");

const anagrams = (word, inputWords) => {
  const inputWordSorted = word.split("").sort().join("");
  let anagramArr = [];
  inputWords.map((element) => {
    if (inputWordSorted === element.split("").sort().join("")) {
      anagramArr.push(element);
    }
  });
  return anagramArr;
};

describe("Array", () => {
  describe("#anagrams()", () => {
    it("should return an new array that contains only anagrams of the original word", () => {
      assert.deepEqual(
        anagrams("hello", ["hello", "hi", "ehllo", "face", "olelh", "ho"]),
        ["hello", "ehllo", "olelh"]
      );
    });
  });
});

// console.log(anagrams("hello", ["hello", "hi", "ehllo", "face", "olelh", "ho"]));
// expect [ 'hello', 'ehllo', 'olelh' ]
