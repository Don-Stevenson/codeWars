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

// idea; generate all the intervals per string, 4, 8=> 4,5,6,7,8
// only push the elements intervals that are not already there
// use reduce to calculate total
// const sumIntervals = (intervals) => {
//   console.log({ intervals });
//   let diffBetweenElements = [];
//   let diffWithinElements = [];

//   const sortedArray = intervals.sort((a, b) => {
//     return a[0] - b[0];
//   });

//   for (let i = 0; i < intervals.length; i++) {
//     const elementI = sortedArray[i];
//     // console.log({ elementI });
//     diffWithinElements.push(elementI[1] - elementI[0]);
//     // console.log({diffWithinElements})

//     // check if there is one another element or is this the last
//     if (sortedArray[i + 1]) {
//       // console.log("first", sortedArray[i + 1][0]);
//       diffBetweenElements.push(sortedArray[i][1] - sortedArray[i + 1][0]);
//       console.log("diff btwn", diffBetweenElements);
//     }
//   }
//   // positive
//   if (diffBetweenElements.reduce((accum, e) => (accum += e)) >= 0) {
//     console.log("here");
//     return (
//       diffWithinElements.reduce((accum, e) => (accum += e)) -
//       diffBetweenElements.reduce((accum, e) => (accum += e))
//     );
//     // if negative
//   } else if (diffBetweenElements.reduce((accum, e) => (accum += e)) < 0) {
//     return (
//       diffWithinElements.reduce((accum, e) => (accum += e)) +
//       diffBetweenElements.reduce((accum, e) => (accum += e))
//     );
//   } else return diffWithinElements.reduce((accum, e) => (accum += e));
// };

const sumIntervals = (intervals) => {
  console.log({ intervals });
  let intervalArr = [];

  // make an array of each of the intervals [1,4] => [1,2,3,4]

  for (let i = 0; i < intervals.length; i++) {
    if (intervalArr.includes(intervals)) {
    }
  }
  // positive
  if (diffBetweenElements.reduce((accum, e) => (accum += e)) >= 0) {
    console.log("here");
    return (
      diffWithinElements.reduce((accum, e) => (accum += e)) -
      diffBetweenElements.reduce((accum, e) => (accum += e))
    );
    // if negative
  } else if (diffBetweenElements.reduce((accum, e) => (accum += e)) < 0) {
    return (
      diffWithinElements.reduce((accum, e) => (accum += e)) +
      diffBetweenElements.reduce((accum, e) => (accum += e))
    );
  } else return diffWithinElements.reduce((accum, e) => (accum += e));
};

// Examples: console.log(
//   sumIntervals([
//     [1, 2],
//     [6, 10],
//     [11, 15],
//   ])
// ); // => 9

// console.log(
//   sumIntervals([
//     [1, 4],
//     [7, 10],
//     [3, 5],
//   ])
// ); // => 7

sumIntervals([
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11],
]); // => 19
