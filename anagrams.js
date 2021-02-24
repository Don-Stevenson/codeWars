// function that checks a word against a sorted array of words
// and returns an arrray of anagrams of the submitted word
// *******************************************************

const anagrams = (word, inputWords) => {
  let wordSorted = word.split("").sort().join("");
  let anagramArr = [];
  for (let word of inputWords) {
    const wordsSorted = word.split("").sort().join("");
    if (wordSorted === wordsSorted) {
      anagramArr.push(word);
    }
  }
  return anagramArr;
};

console.log(anagrams("hello", ["hello", "hi", "ehllo", "face", "olelh"]));
