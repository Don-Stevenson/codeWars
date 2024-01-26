const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const retunsAvg = (arr, sum = 0) => {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

const returnsAvgWithReduce = arr =>
  arr.reduce((acc, cur) => acc + cur, 0) / arr.length

const returnsAvgWithMap = (arr, sum = 0) => {
  arr.map(num => (sum += num))
  return sum / arr.length
}

console.log(retunsAvg(arr)) // expect 5.5

console.log(returnsAvgWithReduce(arr)) // expect 5.5

console.log(returnsAvgWithMap(arr)) // expect 5.5
