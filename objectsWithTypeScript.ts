const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }

const objTimesFive = (obj: { [key: string]: number }): {} => {
  const newObj: { [key: string]: number } = {}
  for (const key in obj) {
    newObj[key] = obj[key] * 5
  }
  return newObj
}

console.log(objTimesFive(obj)) // expect { a: 5, b: 10, c: 15, d: 20, e: 25 }
