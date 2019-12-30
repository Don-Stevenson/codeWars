let array = [1, 4, 5, 6, 3]

function sortArray(array) {
  const odds = array
    .filter(x => x % 2)
    .sort((a, b) => a - b);
  return array
    .map(x => x % 2 ? odds.shift() : x);
}

console.log(sortArray(array))