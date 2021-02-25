const array = [1, 4, 5, 6, 3];

const sortArray = (array) => {
  const odds = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((element) => (element % 2 ? odds.shift() : element));
};

console.log(sortArray(array));
