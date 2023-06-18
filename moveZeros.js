// function that moves zeros to the end of an array
// ************************************************

const moveZeros = arr => {
  let arrOfZeros = []
  let arrWithoutZeros = []

  arr.map(e => {
    e === 0 ? arrOfZeros.push(e) : arrWithoutZeros.push(e)
  })
  return [...arrWithoutZeros, ...arrOfZeros]
}

console.log(moveZeros([0, 1, 4, 45, 0, 0, 7, 9]))
// expected result [  1, 4, 45, 7,  9, 0,  0, 0 ]

console.log(moveZeros([9, 0, 0, 12, 123, 0, 0, 5]))
// expected result [ 9, 12, 123, 5, 0, 0, 0, 0 ]
