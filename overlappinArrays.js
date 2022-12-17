//  taking in an array of 4 points, where each pair represents a range, do the ranges overlap at all?


const arrOfPoints = [2, 4, 5, 6]

// true cases
// a ---- b
///       c ---- d

// c-------d
//    a---b

// false



const doPointsOverlap = ([a, b, c, d]) =>
    (a <= c <= b <= d || c <= a <= b <= d) ? true : false


console.log(doPointsOverlap(arrOfPoints))