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

// Calculate a pair of closest points in linearithmic time
const closestPair = (points) => {
    points.map(e => console.log(e.sort()))
}