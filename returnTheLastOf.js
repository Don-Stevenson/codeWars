// returns the last n things of an array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const lastNItems = (arr, numOfItems) => {
  let itemsArr = []

  for (let i = 1; i <= numOfItems; i++) {
    itemsArr.push(arr[arr.length - i])
  }
  return itemsArr
}

console.log(lastNItems(array, 3))
