//  taking in an array of 4 points, where each pair represents a range, do the ranges overlap at all?

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

module.exports = { doPointsOverlap }