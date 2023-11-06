// a place to try out console assert
// *********************************

// only asserts when evaluates a thing to be false

// console.assert("", "its empty")
// expect Assertion failed: its empty

console.assert("1", "its empty")
// expect no message

const arr = [1, 2, 3, 4, 5, 6, 7, "8", ""]

const doesArrContainTwo = arr => {
  console.table(arr)
  arr.map(element => {
    console.assert(element !== 2, "found the number 2")
  })
}

doesArrContainTwo(arr)

// expect:
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   1    │
// │    1    │   2    │
// │    2    │   3    │
// │    3    │   4    │
// │    4    │   5    │
// │    5    │   6    │
// │    6    │   7    │
// │    7    │  '8'   │
// │    8    │   ''   │
// └─────────┴────────┘
// Assertion failed: found the number 2
