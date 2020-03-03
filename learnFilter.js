// learning filter ...

const arr = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filterByGreaterThan3 = (arr) => {
 return arr.filter(num => num > 3)   
}

console.log(filterByGreaterThan3(arr))
console.log(arr)