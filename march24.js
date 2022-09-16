// basic function that adds one
// ****************************

const addOne = num => num++
// console.log(addOne(8))
// expect
// 9

// basic function that adds two numbers
// ************************************

const addTwoNums = (A, B) => A + B

// console.log(addTwoNums(11, 33))
// expect 44

// basic function that subtracts two numbers
// ******************************************

const substractTwoNums = (A, B) => A - B
// ***************************************

// console.log(substractTwoNums(11, 33))
// expect
// -22

// basic function that divides two numbers
// ***************************************

const divideTwoNums = (A, B) => A / B

// console.log(divideTwoNums(25,2))
// expect
// 12.5

// basic function that multiplys two numbers
// *****************************************

const mulitplyTwoNums = (A, B) => A * B

// console.log(multiplyTwoNums(25,2))
// expect
// 50

// basic function that sqaures a number
// ************************************

const squareOneNum = A => Math.pow(A, 2)

// console.log(squareOneNum(9))
// expect 81

// basic function that finds the square root of a number
// *****************************************************

const sqrRootNum = A => Math.sqrt(A)

// console.log(sqrRootNum(81))
// expect 9

const temps = [0, -5, -6, -11, -12, -3, -1]

const meanTemps = array => array.reduce((a, b) => a + b) / array.length

console.log(`The mean temperature is: ${meanTemps(temps)}`)

const standardDeviation = popArray => {
  return Math.sqrt(
    popArray
      .map(x => Math.pow(x - meanTemps(popArray), 2))
      .reduce((a, b) => a + b) / popArray.length
  )
}

console.log(`The standard deviation is: ${standardDeviation(temps)}`)
// console.log(standardDeviation())
// expect
// Standard deviation is:  4.304719763805532
