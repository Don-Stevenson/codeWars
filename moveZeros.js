// function that moves zeros to the end of an array
// ************************************************

const moveZeros = arr => {
  let arrOfZeros = []
  let arrWithoutZeros = []

  arr.map(e => (e === 0 ? arrOfZeros.push(e) : arrWithoutZeros.push(e)))
  return [...arrWithoutZeros, ...arrOfZeros]
}

console.log(moveZeros([0, 1, 4, 45, 0, 0, 7, 9]))
// expected result [  1, 4, 45, 7,  9, 0,  0, 0 ]

console.log(moveZeros([9, 0, 0, 12, 123, 0, 0, 5]))
// expected result [ 9, 12, 123, 5, 0, 0, 0, 0 ]

console.log(moveZeros([7, 123, 0, 01, 1, 12, 58, 0]))
// expected result [ 7, 123, 1, 1, 12, 58, 0, 0 ]

console.log(moveZeros([12, 12432, 0, 19, 44, 2, 08, 0]))
// expected result [12, 12432, 19, 44, 2, 8, 0, 0 ]

console.log(moveZeros([9, 8, 0, 7, 0, 0, 0001, 0000]))
// expected result [9, 8, 7, 1, 0, 0, 0, 0]

console.log(moveZeros(["a", 8, 0, 7, 0, 0, 0001, 0000]))
// expected result ["a", 8, 7, 1, 0, 0, 0, 0]

console.log(moveZeros([0, "a", 0, "b", 0, 0, 7, 0, 0, 0001, 0000]))
// expected result ['a', 'b', 7, 1, 0, 0, 0, 0, 0, 0, 0]

console.log(moveZeros([0, "a", 0, "c", 0, "b", "Aa", 0, 0, 0001, 0000]))
// expected result ['a', 'c', 'b', 'Aa', 1, 0, 0, 0, 0, 0, 0]

console.log(moveZeros([0, "e", 1, "ff", 0, "dd", "Dog", 0, 0, 0001, 0000]))
// expected result ['e', 1, 'ff','dd', 'Dog', 1, 0, 0, 0, 0, 0]
