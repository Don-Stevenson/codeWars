const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using C-style for loop
const getAverageWithForLoop = arr => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

// Using for...of loop
const getAverageWithForOf = arr => {
  let sum = 0
  for (const num of arr) {
    sum += num
  }
  return sum / arr.length
}

// Using reduce - most concise approach
const getAverageWithReduce = arr =>
  arr.reduce((sum, num) => sum + num, 0) / arr.length

// Using map
const getAverageWithMap = arr => {
  let sum = 0
  arr.map(num => (sum += num))
  return sum / arr.length
}

// Using forEach
const getAverageWithForEach = arr => {
  let sum = 0
  arr.forEach(num => (sum += num))
  return sum / arr.length
}

// Test cases
console.log("For Loop Average:", getAverageWithForLoop(arr)) // 5.5
console.log("For of Average:", getAverageWithForOf(arr)) // 5.5
console.log("Reduce Average:", getAverageWithReduce(arr)) // 5.5
console.log("Map Average:", getAverageWithMap(arr)) // 5.5
console.log("ForEach Average:", getAverageWithForEach(arr)) // 5.5
