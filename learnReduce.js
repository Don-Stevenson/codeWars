const array = [1, 2, 3, 4, 5, 6, 7];

const reducer = (accumalator, currentVal, currentIndex, array) => {
  console.log(accumalator, currentVal, currentIndex, array);
};

//takes in a an array and the runs a callback function on the array
let reducedArray = array.reduce(reducer);

// in this case should expect 28 to be the answer
reducedArray;
