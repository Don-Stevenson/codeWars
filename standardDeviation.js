const standardDeviation = arr => {
  const mean =
    arr.reduce((acc, curr) => {
      return acc + curr
    }, 0) / arr.length

  arr = arr.map(el => {
    return (el - mean) ** 2
  })

  const total = arr.reduce((acc, curr) => acc + curr, 0)

  return Math.sqrt(total / arr.length)
}

console.log(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]))

//Output: 2

//

const math = require("mathjs")

const arr = [2, 4, 4, 5, 7, 9]

const standardDev = math.std(arr)
console.log(standardDev)

//Output: 2.48327740429189
