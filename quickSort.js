// sort array from [ 9, 2, 3, 5, 7, 8, 1, 4, 6]
// to [1, 2, 3, 4, 5, 6, 7, 8, 9]
const array = [9, 2, 3, 5, 7, 8, 1, 4, 6]

const quickSort = array => {
  if (array.length === 0) return array
  const pivot = array[0]
  const smallerThanPivot = []
  const largerThanPivot = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) smallerThanPivot.push(array[i])
    if (array[i] > pivot) largerThanPivot.push(array[i])
  }
  return `${quickSort(smallerThanPivot)}${pivot},${quickSort(largerThanPivot)}`
}
console.log(quickSort(array))
