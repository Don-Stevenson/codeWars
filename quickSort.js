// // sort array from [ 9, 2, 3, 5, 7, 8, 1, 4, 6]
// // to [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const array = [9, 2, 3, 5, 7, 8, 1, 4, 6]

// // const sortedArrary = array.sort().toString()
// const quickSort = array => {
//   console.log(`
//         Running the function
//         *************
// `)

//   if (array.length === 0) return array
//   const pivot = array[0]
//   const smallerThanPivot = []
//   const largerThanPivot = []

//   array.map(e => {
//     if (e < pivot) {
//       smallerThanPivot.push(e)
//       console.log(
//         `
//          Inside e < pivot

//          pivot: ${pivot}
//          smallerThanPivot: ${smallerThanPivot}
//          largerThanPivot: ${smallerThanPivot}`
//       )
//     }
//     if (e > pivot) {
//       largerThanPivot.push(e)
//       console.log(
//         `
//          Inside e > pivot

//          pivot: ${pivot}
//          smallerThanPivot: ${smallerThanPivot}
//          largerThanPivot: ${smallerThanPivot}`
//       )
//     }
//   })

//   return `${quickSort(smallerThanPivot)} ${pivot}${quickSort(largerThanPivot)}`
// }
// console.log("final sorted array is: ", quickSort(array))

// Chat GPT solution here

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr // Base case: already sorted
//   }

//   const pivot = arr[0]
//   const left = []
//   const right = []

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)]
// }

const quickSort = arr => {
  if (arr.length <= 1) return arr // Base case
  const pivot = arr[0]

  const left = arr.filter(e => e < pivot)
  const right = arr.filter(e => e > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}
const unsortedArray = [9, 2, 1, 3, 8, 4, 7, 5, 6]
const sortedArray = quickSort(unsortedArray)

console.log("Unsorted array:", unsortedArray)
console.log("Sorted array:", sortedArray)
