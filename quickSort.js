// sort array from [ 9, 2, 3, 5, 7, 8, 1, 4, 6]
// to [1, 2, 3, 4, 5, 6, 7, 8, 9]
const array = [9, 2, 3, 5, 7, 8, 1, 4, 6]

// const sortedArrary = array.sort().toString()
const quickSort = array => {
  console.log(`Running the function
  *************
  `)

  if (array.length === 0) return array
  const pivot = array[0]
  const smallerThanPivot = []
  const largerThanPivot = []

  array.map(e => {
    if (e < pivot) {
      console.log(`${e} is smaller than ${pivot}`)
      smallerThanPivot.push(e)
      console.log(
        `pivot ${pivot} smallerThanPivot ${smallerThanPivot} largerThanPivot ${smallerThanPivot}`
      )
    }
    if (e > pivot) {
      console.log(`${e} is larger than ${pivot}`)
      largerThanPivot.push(e)
      console.log(
        `pivot ${pivot} smallerThanPivot ${smallerThanPivot} largerThanPivot ${smallerThanPivot}`
      )
    }
  })

  return `${quickSort(smallerThanPivot)} ${pivot}${quickSort(largerThanPivot)}`
}
console.log(quickSort(array))
