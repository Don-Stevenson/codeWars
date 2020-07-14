console.log(parseFloat("tree")); // => NaN
console.log(parseFloat(345)); // => 345
console.log(parseFloat("345")); // => 345
console.log("345"); //=> 345 as a string

console.log(isNaN("345")); // => false
console.log(isNaN(345)); // => false
console.log(isNaN("Hello")); // => false

console.log(isNaN(parseFloat("Hello"))); // => True

console.log(isNaN(parseFloat("345"))); 
// => False - parses the number in parseFloat
//and then evaluates that as a number, returning false

console.log(isNaN(parseFloat(345))); // => False
