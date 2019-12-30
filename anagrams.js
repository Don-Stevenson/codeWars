
function anagrams(word, words) {
  let wordSorted = word.split('').sort().join('');
  let anagramArr = []
  for (let item of words) {
    let wordsSorted = item.split('').sort().join('');
    if (wordSorted === wordsSorted) {
      anagramArr.push(item)
    }
  }
  return anagramArr;
}

console.log(anagrams('hello', ['hello', 'hi', 'ehllo', 'face', 'olelh']))
