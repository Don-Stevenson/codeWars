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

const sumIntervals = (intervals) => {
  let diffWithinElements = [];
  for (let i = 0; i < intervals.length; i++) {
    const elementI = intervals[i];
    console.log({ elementI });
    diffWithinElements.push(elementI[1] - elementI[0]);
    console.log("last", intervals[i][1]);
    if (intervals[i+1]) {
    console.log("first", intervals[i+1][0]);
    }
  }

  console.log(diffWithinElements);
  return diffWithinElements.reduce((accum, e) => (accum += e));
};

// Examples:
console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
); // => 9

// sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ] ); // => 7

// sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ); // => 19