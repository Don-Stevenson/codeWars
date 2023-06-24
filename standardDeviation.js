const standardDeviation = arr => {
  const mean = arr.reduce((acc, curr) => acc + curr, 0) / arr.length

  const differenceOfMeansSquared = arr.map(el => (el - mean) ** 2)

  const total = differenceOfMeansSquared.reduce((acc, curr) => acc + curr, 0)
  return Math.sqrt(total / arr.length)
}

console.log(standardDeviation([2, 4, 4, 5, 7, 9, 12]))

//Output: 2
//

const math = require("mathjs")

const arr = [2, 4, 4, 5, 7, 9, 12]

const standardDev = math.round(math.std(arr), 3)
console.log(standardDev)

//Output: 3.436
