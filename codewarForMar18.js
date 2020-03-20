// takes in an array and mulitplies by given number
// ************************************************
const multiplyByX = (arr, num) => {
  let newArr = [];
  arr.forEach(element => {
    newArr.push(element * num);
  });
  console.log("newarr is ", newArr + " num is ", num);
  return newArr;
};

console.log(multiplyByX([1, 2, 3], 3));
