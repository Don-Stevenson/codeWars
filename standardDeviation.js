const standardDeviation = arr => {
  const mean = arr.reduce((acc, curr) => acc + curr, 0) / arr.length

  const differenceOfMeansSquared = arr.map(el => (el - mean) ** 2)

  const total = differenceOfMeansSquared.reduce((acc, curr) => acc + curr, 0)
  return Math.sqrt(total / arr.length)
}

const getStandardDeviation = array => {
  const noOfElements = array.length
  const mean = array.reduce((a, b) => a + b) / noOfElements
  return Math.sqrt(
    array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / noOfElements
  )
}

console.log(getStandardDeviation([2, 4, 4, 5, 7, 9, 12]))

//Output: 2
//

const math = require("mathjs")

const arr = [2, 4, 4, 5, 7, 9, 12]
const arr2 = [1, 4, 4, 5, 2, 4, 19]

const standardDev = math.round(getStandardDeviation(arr), 3)
console.log(standardDev)

//Output: 3.436

const standardDev2 = math.round(getStandardDeviation(arr2), 3)
console.log(standardDev2)

//Output: 5.628
