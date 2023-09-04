// returns the last n things of an array

const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

// const lastNItems = (arr, numOfItems) => {
//   let itemsArr = []

//   for (let i = 1; i <= numOfItems; i++) {
//     itemsArr.push(arr[arr.length - i])
//   }
//   return itemsArr
// }

const lastNItems = (arr, numOfItems) => {
  return arr.map((e, index) => {
    // console.log({ e }, { index }, { numOfItems })

    let finalArr = []
    if (index === arr.length - numOfItems) {
      // console.log(arr[index])
      for (let i = 0; i < numOfItems; i++) {
        finalArr.push(arr[index + i])
      }
      for (const element of finalArr) {
        if (!element) finalArr.pop(element)
      }
    }
    return finalArr
  })
}

// TODO: find recursive function to flatten array or remove empty arrays

console.log(lastNItems(array, 3))
console.log(lastNItems(array, 6))
// Expect:
// [
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   [ 'h', 'i', 'j' ],
//   undefined,
//   undefined
// ]
// [
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   [ 'e', 'f', 'g', 'h', 'i', 'j' ],
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined
// ]
