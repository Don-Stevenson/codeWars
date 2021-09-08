// a place to try out console assert
// *********************************

// only asserts when evaluates a thing to be false

// console.assert("", "its empty")
// expect Assertion failed: its empty

console.assert("1", "its empty")
// expect no message

const arr = [1, 2, 3, 4, 5, 6, 7, "8", ""]

const doesArrContainTwo = arr => {
  let count = 1
  console.table(arr)
  arr.map(element => {
    console.log({ count })
    console.assert(element !== 2, "found the number 2")
    count += 1
  })
}

doesArrContainTwo(arr)

// expect :
// { count: 1 }
// { count: 2 }
// Assertion failed: found the number 2
// { count: 3 }
// { count: 4 }
// { count: 5 }
// { count: 6 }
// { count: 7 }
// { count: 8 }
// { count: 9 }
