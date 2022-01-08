// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
// idea generate all the intervals per string, 4, 8 => 4,5,6,7,8
// only push the elements intervals that are not already there
// use reduce to calculate total
// const sumIntervals = (intervals) => {
//   console.log({ intervals })
//   let diffBetweenElements = []
//   let diffWithinElements = []

const mergeRedundantIntervals = intervals => {
  const obj = {}
  intervals.forEach((interval) => {
    // setting a key to the 2nd value, when the first value is not already present
    if (!obj[interval[0]]) {
      obj[interval[0]] = interval[1]

      // if the key value is less than the incoming value from the interval
      // if true, then set the key value to be the incoming value from 2nd interva
    } else {
      if (obj[interval[0]] < interval[1]) {
        obj[interval[0]] = interval[1]
      }
    }
  })

  // return an array with new key value pairs
  return Object.keys(obj).map((key) => [Number(key), obj[key]])
}

const mergeOverlaps = intervals => {
  if (intervals.length === 0 || intervals.length === 1) return intervals

  const result = [[...intervals[0]]]
  for (let current = 1; current < intervals.length; current++) {
    let prev = result.length - 1
    // check if between
    if (
      result[prev][0] <= intervals[current][0] &&
      result[prev][1] >= intervals[current][0]
    ) {
      // check if 2nd number is bigger
      if (result[prev][1] <= intervals[current][1]) {
        result[prev][1] = intervals[current][1]
      }
      // else keep the current intervals
    } else {
      result.push([...intervals[current]])
    }
  }
  return result
}

const sumIntervals = intervals => {
  // remove redundant duplicates and same started sets
  const nonDuplicateIntervals = mergeRedundantIntervals(intervals)
  // sort intervals
  const sortedIntervals = nonDuplicateIntervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    else a[1] - b[1]
  })
  // filter sorted intervals
  const filteredIntervals = mergeOverlaps(sortedIntervals)
  let result = 0

  // calculate the result through the difference of each element
  filteredIntervals.forEach((e) => (result += e[1] - e[0]))
  return result
}

// test Examples:
//  console.log(
//   sumIntervals([
//     [1, 2],
//     [6, 10],
//     [11, 15],
//   ])
// ) // => 9

// console.log(
//   sumIntervals([
//     [1, 4],
//     [7, 10],
//     [3, 5],
//   ])
// ) // => 7

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
)
// => 19
