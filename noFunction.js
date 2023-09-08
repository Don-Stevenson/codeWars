// a js file with no function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// array.map(e => console.log(e * 10))

const initialValue = 0

console.log(array.filter(e => e >= 7))
// expect [7, 8, 9]
console.log(array.reduce((prev, curr) => prev + curr, initialValue))
// expect => 45
