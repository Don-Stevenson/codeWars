// learning filter ...

const arr = ["hey", "Jude", "don't", "make", "it", "bad"]

// const filterByGreaterThan3 = (arr) => {
//  return arr.filter(num => num > 3)   
// }

// console.log(filterByGreaterThan3(arr))
// console.log(arr)

const doubleDigitNos = (array) =>{
    return array.filter(word => word.length > 3)
}

console.log(doubleDigitNos(arr))