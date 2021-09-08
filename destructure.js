// trying destructuring objects into variables inside arrays and objects
//

const object = {
  a: 12,
  b: 34,
  c: () => console.log("hi there"),
}

const { a, c } = object

// must destructure into variables that already exist in object like a, b, c
const { foo, barr } = object

// console.log(a, c());
// expect: hi there
// 12 undefined

// console.log(foo, barr);
// expect: undefined undefined

// destructuring an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// note that you can call the elements of an array any new variable you like
const [p, q, five] = arr
// console.log("p, q, five: ", p, q, five);
// expect: p, q, five:  1 2 3

const addTwoDigits = (a, b) => a + b

console.log(addTwoDigits(p, q))
// expect 3
