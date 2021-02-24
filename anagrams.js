// function that checks a word against a sorted array of words
// and returns an arrray of anagrams of the submitted word
// *******************************************************

const anagrams = (word, words) => {
  let wordSorted = word.split("").sort().join("");
  let anagramArr = [];
  for (let item of words) {
    const wordsSorted = item.split("").sort().join("");
    if (wordSorted === wordsSorted) {
      anagramArr.push(item);
    }
  }
  return anagramArr;
};

console.log(anagrams("hello", ["hello", "hi", "ehllo", "face", "olelh"]));
