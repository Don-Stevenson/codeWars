/**
 * Adds a random fudge factor to a score
 * @param {number} score - The original score
 * @returns {number} - The fudged score
 */
const fudge = score => {
  const fudgeFactor = Math.random() * 3 - 1.5 // Random value between -1.5 and 1.5
  return Number((score + fudgeFactor).toFixed(2))
}

/**
 * Demonstrates fudging a score multiple times
 * @param {number} score - The score to fudge
 * @param {number} iterations - Number of times to fudge the score
 */
const demonstrateFudging = (score, iterations = 5) => {
  console.log(`Original score: ${score}`)
  console.log("Fudged scores:")

  for (let i = 0; i < iterations; i++) {
    const fudgedScore = fudge(score)
    console.log(`  ${i + 1}. ${fudgedScore}`)
  }
}

// Demonstrate fudging a score of 20 n times
demonstrateFudging(20, 10) //   1. 19.84
// Original score: 20
// Fudged scores:
//   1. 21.08
//   2. 19.52
//   3. 19.17
//   4. 19.48
//   5. 20.38
//   6. 21.08
//   7. 19.9
//   8. 19.57
//   9. 21.16
//   10. 19.8

demonstrateFudging(22, 10) // expect
// Original score: 22
// Fudged scores:
//   1. 20.52
//   2. 21.92
//   3. 22.17
//   4. 22.84
//   5. 22.63
//   6. 21.66
//   7. 22.49
//   8. 20.98
//   9. 22.14
//   10. 22.25

demonstrateFudging(10, 10) // expect
// Original score: 10
// Fudged scores:
// 1. 10.76
// 2. 8.63
// 3. 9.18
// 4. 10.76
// 5. 11.16
// 6. 9.92
// 7. 10.32
// 8. 11.47
// 9. 10.62
// 10. 8.8

// Original score: 20
// Fudged scores:
//   1. 21.08
//   2. 19.52
//   3. 19.17
//   4. 19.48
//   5. 20.38
//   6. 21.08
//   7. 19.9
//   8. 19.57
//   9. 21.16
//   10. 19.8

demonstrateFudging(8, 10) // expect
// Original score: 8
// Fudged scores:
//   1. 8.3
//   2. 8.31
//   3. 9.34
//   4. 7.03
//   5. 9.08
//   6. 8.12
//   7. 9.06
//   8. 7.88
//   9. 9.37
//   10. 6.55

demonstrateFudging(5, 10) // expect
// Original score: 5
// Fudged scores:
//   1. 4.55
//   2. 3.81
//   3. 5.27
//   4. 6
//   5. 5.49
//   6. 4.89
//   7. 4.85
//   8. 3.62
//   9. 3.7
//   10. 6.08

demonstrateFudging(4, 10) // expect
// Original score: 4
// Fudged scores:
//   1. 4.86
//   2. 4.39
//   3. 3.59
//   4. 4.95
//   5. 3.98
//   6. 4.92
//   7. 4.2
//   8. 4.75
//   9. 3.8
//   10. 2.65

demonstrateFudging(3, 10) // expect
// Original score: 3
// Fudged scores:
//   1. 3.86
//   2. 3.39
//   3. 2.59
//   4. 3.95
//   5. 2.98
//   6. 3.92
//   7. 3.2
//   8. 3.75
//   9. 2.8
//   10. 1.65

demonstrateFudging(2, 10) // expect
// Original score: 2
// Fudged scores:
//   1. 2.86
//   2. 2.39
//   3. 1.59
//   4. 2.95
//   5. 1.98
//   6. 2.92
//   7. 2.2
//   8. 2.75
//   9. 1.8
//   10. 0.65

demonstrateFudging(1, 10) // expect
// Original score: 1
// Fudged scores:
//   1. 1.86
//   2. 1.39
//   3. 0.59
//   4. 1.95
//   5. 0.98
//   6. 1.92
//   7. 1.2
//   8. 1.75
//   9. 0.8
//   10. -0.35

demonstrateFudging(0, 10) // expect
// Original score: 1
// Fudged scores:
//   1. 0.86
//   2. 0.39
//   3. -0.41
//   4. -0.05
//   5. -0.02
//   6. -0.08
//   7. -0.8
//   8. -0.25
//   9. 0.8
//   10. -0.35

demonstrateFudging(-1, 10) // expect
// Original score: -1
// Fudged scores:
//   1. -0.14
//   2. -0.61
//   3. -1.41
//   4. -0.05
//   5. -1.02
//   6. -0.08
//   7. -0.8
//   8. -0.25
//   9. 0.8
//   10. -0.35

demonstrateFudging(-2, 10) // expect
// Original score: -2
// Fudged scores:
//   1. -1.14
//   2. -1.61
//   3. -2.41
//   4. -1.05
//   5. -2.02
//   6. -1.08
//   7. -2.8
//   8. -1.25
//   9. -2.2
//   10. -3.35

demonstrateFudging(-3, 10) // expect
// Original score: -3
// Fudged scores:
//   1. -2.14
//   2. -2.61
//   3. -3.41
//   4. -2.05
//   5. -3.02
//   6. -2.08
//   7. -3.8
//   8. -2.25
//   9. -3.2
//   10. -4.35

demonstrateFudging(-10, 10) // expect
// Original score: -3
// Fudged scores:
//   1. -11.14
//   2. -11.61
//   3. -12.41
//   4. -11.05
//   5. -12.02
//   6. -12.08
//   7. -13.8
//   8. -12.25
//   9. -13.2
//   10. -14.35

demonstrateFudging(-11, 10) // expect
// Original score: -3
// Fudged scores:
//   1. -12.14
//   2. -12.61
//   3. -13.41
//   4. -12.05
//   5. -13.02
//   6. -12.08
//   7. -14.8
//   8. -13.25
//   9. -14.2
//   10. -14.35
