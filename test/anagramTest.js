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
      assert.deepStrictEqual(
        anagrams("hello", ["hello", "hi", "ehllo", "face", "olelh", "ho"]),
        ["hello", "ehllo", "olelh"]
      );
    });
    it("should return an empty array when there are no anagrams of the original word", () => {
      assert.deepStrictEqual(
        anagrams("hello", ["hgllo", "hi", "ihllo", "face", "plelh", "ho"]),
        []
      );
    });
  });
});

// console.log(anagrams("hello", ["hello", "hi", "ehllo", "face", "olelh", "ho"]));
// expect [ 'hello', 'ehllo', 'olelh' ]
