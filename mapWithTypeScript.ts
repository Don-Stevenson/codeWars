const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArrayTimesfive = (arr: number[]) => {
  return arr.map(num => num * 5)
}
console.log(newArrayTimesfive(arr)) // expect [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
