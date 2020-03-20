// takes in an array and mulitplies by given number
// with forEach
// // ************************************************
// const multiplyByX = (arr, num) => {
//   let newArr = [];
//   arr.forEach(element => {
//     newArr.push(element * num);
//   });
//   return newArr;
// };

const multiplyByX = (arr, num) => {
  let newArr = [];
  for (const item of arr) {
    newArr.push(item * num);
  }
  return newArr;
};

console.log(multiplyByX([1, 2, 3], 3));
