// [2021-06-21] Challenge #395 [Easy] Nonogram row
// This challenge is inspired by nonogram puzzles,
// but you don't need to be familiar with these puzzles in order to complete the challenge.

// A binary array is an array consisting of only the values 0 and 1.
//  Given a binary array of any length, return an array of positive integers that represent the lengths of
// the sets of consecutive 1's in the input array, in order from left to right.

// nonogramrow([]) => []
// nonogramrow([0,0,0,0,0]) => []
// nonogramrow([1,1,1,1,1]) => [5]
// nonogramrow([0,1,1,1,1,1,0,1,1,1,1]) => [5,4]
// nonogramrow([1,1,0,1,0,0,1,1,1,0,0]) => [2,1,3]
// nonogramrow([0,0,0,0,1,1,0,0,1,0,1,1,1]) => [2,1,3]
// nonogramrow([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]) => [1,1,1,1,1,1,1,1]
// As a special case, nonogram puzzles usually represent the empty output ([]) as [0].
// If you prefer to do it this way, that's fine, but 0 should not appear in the output in any other case.

const nonogramrow = array => {
  if (array.length === 0) return []
  let numArr = []
  let count = 0
  for (let i = 0; i < array.length; i++) {
    console.log("element : ", array[1])
    if (array[i] === 1) count += 1
    console.log("count if array i is 1", count)
    console.log({ numArr })
  }
  numArr.push(count)
  return numArr
}

// console.log(nonogramrow([]))
console.log(nonogramrow([0, 0, 0, 0, 0])) // => []
console.log(nonogramrow([1, 1, 1, 1, 1])) // => [5]
// nonogramrow([0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1]) //=> [5,4]
// nonogramrow([1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0]) // => [2,1,3]
// nonogramrow([0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1]) // => [2,1,3]
// nonogramrow([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]) // => [1,1,1,1,1,1,1,1]
