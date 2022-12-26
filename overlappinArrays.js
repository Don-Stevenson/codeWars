//  taking in an array of 4 points, where each pair represents a range, do the ranges overlap at all?


const arrOfPoints = [2, 4, 55, 68] // false
const arrOfPoints2 = [2, 5, 3, 6] // true
const arrOfPoints3 = [1, 2, 2, 6] // true
const arrOfPoints4 = [1, 1, 3, 4] // false

const arrOfPoints5 = [0, 0, 0, 0] // true

// true cases
// a ---- b
///       c ---- d

// c-------d
//    a---b

// false
// a --- b
//         c----d


const doPointsOverlap = ([a, b, c, d]) =>
    (a <= c) && (d <= b) || (c <= b) && (a <= d) ? true : false


console.log(doPointsOverlap(arrOfPoints)) // => false
console.log(doPointsOverlap(arrOfPoints2)) // => true
console.log(doPointsOverlap(arrOfPoints3)) // => true
console.log(doPointsOverlap(arrOfPoints4)) // => false
console.log(doPointsOverlap(arrOfPoints5)) // => true
