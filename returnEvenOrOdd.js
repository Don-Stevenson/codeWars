const integers = [2, 4, 0, 100, 4, 11, 2602, 36]

// function that returns which integer is the outlier, either odd or even
// **********************************************************************

const findOutlier = integers => {
  // make an array that is only the even integers
  const evenIntsArr = integers.filter(x => x % 2 === 0)

  // make an array that is only the odd integers

  const oddIntsArr = integers.filter(x => x % 2 !== 0)
  // if odds array is greater than one, then the outlier integer is even
  // if the odds array is not greater than one, then the outlier integer is odd
  return oddIntsArr.length > 1 ? evenIntsArr[0] : oddIntsArr[0]
}

console.log(findOutlier(integers))
// returns 11
