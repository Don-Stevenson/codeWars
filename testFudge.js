// Function to test fudge multiple times for a given score

// add a small amount of noise to help make the teams are not identical each time
const fudge = score => score + (Math.random() - 0.5) * 1.4
const testFudge = (score, trials = 1000) => {
  const results = []
  for (let i = 0; i < trials; i++) {
    results.push(fudge(score))
  }

  // Calculate statistics
  const min = Math.min(...results)
  const max = Math.max(...results)
  const avg = results.reduce((a, b) => a + b) / results.length

  // Calculate how many results fall in each range
  const distribution = {
    below: (results.filter(r => r < score).length / trials) * 100,
    above: (results.filter(r => r > score).length / trials) * 100,
    equal: (results.filter(r => r === score).length / trials) * 100,
  }

  return {
    score,
    min: min.toFixed(4),
    max: max.toFixed(4),
    avg: avg.toFixed(4),
    range: (max - min).toFixed(4),
    distribution,
  }
}

// Test scores from 1 to 10
const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const results = scores.map(score => testFudge(score))

// Print results in a formatted table
console.log("Score | Min    | Max    | Avg    | Range  | Below% | Above%")
console.log("------|--------|--------|--------|--------|---------|--------")
results.forEach(r => {
  console.log(
    `${r.score.toString().padEnd(5)} | ` +
      `${r.min.padEnd(6)} | ` +
      `${r.max.padEnd(6)} | ` +
      `${r.avg.padEnd(6)} | ` +
      `${r.range.padEnd(6)} | ` +
      `${r.distribution.below.toFixed(1).padEnd(7)} | ` +
      `${r.distribution.above.toFixed(1)}`
  )
})
