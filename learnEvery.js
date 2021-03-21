// a place to try out the every
// ****************************
// looks at every value in an array 
// 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const isValueAbove = (value) => value > 0 ? true : false

console.log(arr.every(isValueAbove));
// expect true
