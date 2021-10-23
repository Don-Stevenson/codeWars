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

/// Tests
// ******
// // 
// describe("Example tests", ()=> {

//     it("Example", () => {

//       var points = [
//         [2,2], // A
//         [2,8], // B
//         [5,5], // C
//         [6,3], // D
//         [6,7], // E
//         [7,4], // F
//         [7,9]  // G
//       ];

//       var result = closestPair(points);
//       result.sort();
//       Test.assertSimilar(result[0], [6,3]);
//       Test.assertSimilar(result[1], [7,4]);
//     });

//     it("Two points", ()=> {
//       var points = [
//         [2,2], // A
//         [2,8], // B
//       ];

//       var result = closestPair(points);
//       Test.expect( Array.isArray(result), 'The output must be an array');
//       result.sort();
//       Test.assertSimilar(result[0], [2,2]);
//       Test.assertSimilar(result[1], [2,8]);
//     });

//     it("Duplicated point", () => {

//       var points = [
//         [2,2], // A
//         [2,8], // B
//         [5,5], // C
//         [5,5], // C
//         [6,3], // D
//         [6,7], // E
//         [7,4], // F
//         [7,9]  // G
//       ];

//       var result = closestPair(points);
//       result.sort();
//       Test.assertSimilar(result[0], [5,5]);
//       Test.assertSimilar(result[1], [5,5]);
//     });
//   });


// formula used to find the distance from two points on a Cartsian X Y grid
const findDistance = ([x1, y1], [x2, y2]) => Math.sqrt((Math.pow(x1 - x2, 2)) + Math.pow(y1 - y2, 2))

// console.log(findDistance([2, 3], [4, 4])) // => 2.23606797749979

// Calculate a pair of closest points in linearithmic time
const closestPair = points => {
    console.log("first two points", points[0], points[1]);

    // As a starting point, takes in the first two points and finds the distance.
    // this value used to compare with other distances below 
    let minDistance = findDistance(points[0], points[1])
    console.log({ minDistance })

    // setting the indeces to the above from findDistance as a starting point
    let indecesResult = [0, 1]
    for (let i = 0; i < points.length; i++) {
        console.log(points[i])

    }

}

closestPair([[2, 3], [4, 4], [2, 4], [4, 6]])
closestPair([[5, 3], [2, 5], [6, 7], [1, 2]])

// https://en.wikipedia.org/wiki/Closest_pair_of_points_problem

// Linear-time randomized algorithms
// A linear expected time randomized algorithm of Rabin (1976), modified slightly by Richard Lipton 
// to make its analysis easier, proceeds as follows, on an input set {\displaystyle S}S consisting of 
// {\displaystyle n}n points in a {\displaystyle k}k-dimensional Euclidean space:

// Select {\displaystyle n}n pairs of points uniformly at random, with replacement, and let 
// {\displaystyle d}d be the minimum distance of the selected pairs.
// Round the input points to a square grid of points whose size 
// (the separation between adjacent grid points) is {\displaystyle d}d,
//  and use a hash table to collect together pairs of input points that round to the same grid point.
// For each input point, compute the distance to all other inputs that either round to the same grid point
//  or to another grid point within the Moore neighborhood of {\displaystyle 3^{k}-1}{\displaystyle 3^{k}-1}
//  surrounding grid points.
// Return the smallest of the distances computed throughout this process.
// The algorithm will always correctly determine the closest pair,
//  because it maps any pair closer than distance {\displaystyle d}d to the same grid point or 
//  to adjacent grid points. The uniform sampling of pairs in the first step of the algorithm 
//  (compared to a different method of Rabin for sampling a similar number of pairs) simplifies the proof 
//  that the expected number of distances computed by the algorithm is linear.[4]