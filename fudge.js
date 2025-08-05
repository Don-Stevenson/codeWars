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
// 2. 21.03
// 3. 20
// 4. 19.94
// 5. 20.71
// 6. 19.5
// 7. 21.16
// 8. 19.92
// 9. 19.71
// 10. 20.95
demonstrateFudging(22, 10) // expect
// 1. 22.26
// 2. 21.32
// 3. 20.72
// 4. 20.82
// 5. 22.08
// 6. 20.69
// 7. 21.74
// 8. 23
// 9. 20.83
// 10. 22.33
