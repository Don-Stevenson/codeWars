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
demonstrateFudging(20, 10)
