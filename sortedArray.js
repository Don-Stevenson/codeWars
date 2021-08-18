const array = [1, 4, 5, 6, 3];

// sorting an array be lowest odd then lowest even,
// then next lowest odd and next lowest even, etc

const sortArray = array => {
  const odds = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((element) => (element % 2 ? odds.shift() : element));
};

console.log(sortArray(array));
// expect [ 1, 4, 3, 6, 5 ]
