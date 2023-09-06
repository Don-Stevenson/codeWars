// returns the last n things of an array

const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

// const returnsTheLastNItems = (arr, numOfItems) => {
//   let itemsArr = []
//   for (let i = 1; i <= numOfItems; i++) {
//     itemsArr.push(arr[arr.length - i])
//   }
//   return itemsArr
// }
// console.log(returnsTheLastNItems(array, 2))
// with c style loop, Results:
// [ 'j', 'i' ]

// const returnsTheLastNItems = (arr, numOfItems) => {
//   let finalArr = []
//   arr.map((e, index) => {
//     if (index >= arr.length - numOfItems) {
//       finalArr.push(e)
//     }
//   })
//   return finalArr
// }
// console.log(returnsTheLastNItems(array, 6))
// with map, but finalArr is required to remove undefined entries to the array
// [ 'e', 'f', 'g', 'h', 'i', 'j' ]

// const returnsTheLastNItems = (arr, numOfItems) =>
//   arr.filter((e, index) => index >= arr.length - numOfItems)

// console.log(returnsTheLastNItems(array, 2))

// result:
// [ 'e', 'f', 'g', 'h', 'i', 'j' ]
