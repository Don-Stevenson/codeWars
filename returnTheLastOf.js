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
    console.log({ e }, { index }, { numOfItems })

    let finalArr = []
    if (index === arr.length - numOfItems) {
      console.log(arr[index])
      for (let i = 0; i < numOfItems; i++) {
        finalArr.push(arr[index + i])
      }
      return finalArr
    }
  })
}

console.log(lastNItems(array, 3))
