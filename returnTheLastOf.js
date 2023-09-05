// returns the last n things of an array

const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

// const lastNItems = (arr, numOfItems) => {
//   let itemsArr = []

//   for (let i = 1; i <= numOfItems; i++) {
//     itemsArr.push(arr[arr.length - i])
//   }
//   return itemsArr
// }

// const lastNItems = (arr, numOfItems) => {
//   let finalArr = []
//   arr.map((e, index) => {
//     const lastNItems = arr.length - numOfItems
//     if (index >= lastNItems) {
//       finalArr.push(e)
//     }
//   })
//   return finalArr
// }
// console.log(lastNItems(array, 6))

const returnsTheLastNItems = (arr, numOfItems) =>
  arr.filter((e, index) => index >= arr.length - numOfItems)

console.log(returnsTheLastNItems(array, 2))

// result:
// [ 'e', 'f', 'g', 'h', 'i', 'j' ]
