// Given a number of points on a plane, your task is to find two points with the smallest distance between them in linearithmic O(n log n) time.

// Example
//   1  2  3  4  5  6  7  8  9
// 1
// 2    . A
// 3                . D
// 4                   . F
// 5             . C
// 6
// 7                . E
// 8    . B
// 9                   . G
// For the plane above, the input will be:

// [
//   [2,2], // A
//   [2,8], // B
//   [5,5], // C
//   [6,3], // D
//   [6,7], // E
//   [7,4], // F
//   [7,9]  // G
// ]
// => closest pair is: [[6,3],[7,4]] or [[7,4],[6,3]]
// (both answers are valid)
// The two points that are closest to each other are D and F.
// Expected answer should be an array with both points in any order.

// Goal
// The goal is to come up with a function that can find two closest points for any arbitrary array of points, in a linearithmic time.

// Note: for compatibility reasons, your function will be called with one additional parameter, a distance calculation function. However you can completely ignore it, and you do not have to account for it - it's there only to keep compatibility with old solutions.

// More information on wikipedia.

// formula used to find the distance from two points on a Cartsian X Y grid
const findDistance = ([x1, y1], [x2, y2]) =>
  Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

// console.log(findDistance([2, 3], [4, 4])) // => 2.23606797749979

// Calculate a pair of closest points in linearithmic time
const closestPair = (points) => {
  // As a starting point, takes in the first two points and finds the distance.
  // this value used to compare with other distances below
  let minDistance = findDistance(points[0], points[1]);
  // console.log({ minDistance })

  // setting the indeces to the above from findDistance as a starting point
  let indecesResult = [0, 1];

  // loops through the array of points, eg [2,5]
  for (let i = 1; i < points.length; i++) {
    // loops through the array of points to compare one point to all others
    for (let j = 1; j < points.length; j++) {
      // finds the current distance between the two points in each succussive each loop
      const currentDistanceBetweenPoints = findDistance(points[i], points[j]);

      // checks to see if the values are the same because the indeces
      // are equal which handles dupplicates
      // and if the current distance is less than the minimum distance
      if (i !== j && currentDistanceBetweenPoints < minDistance) {
        // sets these values into their respective values if the above is true
        minDistance = currentDistanceBetweenPoints;
        indecesResult = [i, j];
      }
    }
  }
  // returns the points from the indices above where the distance was the smallest
  return [points[indecesResult[0]], points[indecesResult[1]]];
};


// Tests
// *****


// console.log(
//   closestPair([
//     [2, 3],
//     [4, 4],
//     [3, 7],
//     [4, 6],
//   ])
// ); // = > [ [ 3, 7 ], [ 4, 6 ] ]
// console.log(
//   closestPair([
//     [5, 3],
//     [2, 5],
//     [6, 7],
//     [1, 2],
//   ])
// ); // =>[ [ 2, 5 ], [ 1, 2 ] ]

//handles duplicate values

// console.log(
//   closestPair([
//     [2, 2], // A
//     [2, 8], // B
//     [5, 5], // C
//     [5, 5], // C
//     [6, 3], // D
//     [6, 7], // E
//     [7, 4], // F
//     [7, 9], // G
//   ])
// ); // => [[5,5], [5,5]]

// https://en.wikipedia.org/wiki/Closest_pair_of_points_problem
