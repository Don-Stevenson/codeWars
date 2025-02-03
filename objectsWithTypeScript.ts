const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }

const objTimesFive = (obj: { [key: string]: number }): {} => {
  const newObj: { [key: string]: number } = {}
  for (const key in obj) {
    newObj[key] = obj[key] * 5
  }
  return newObj
}

console.log(objTimesFive(obj)) // expect { a: 5, b: 10, c: 15, d: 20, e: 25 }

interface Person {
  firstName: string
  age: number
  job: string
  [key: string]: string | number
}

const personOne: Person = {
  firstName: "Jack",
  age: 10,
  job: "student",
  funFact: "I love to play the guitar",
}

const personTwo: Person = {
  firstName: "Steve",
  age: 20,
  job: "developer",
  funFact: "I love to eat guavas",
}

const personThree: Person = {
  firstName: "Bob",
  age: 56,
  job: "Teacher",
  funFact: "I like old cars",
}

const personFour: Person = {
  firstName: "Gary",
  age: 65,
  job: "Custodian",
  funFact: "I like country music",
}
const personFive: Person = {
  firstName: "Gary",
  age: 65,
  job: "Custodian",
  funFact: "I like country music",
  lastName: "Smith",
}

console.log(personOne) // expect { firstName: 'Jack', age: 25,   job: 'developer', funFact: 'I love to play the guitar' };
console.log(personTwo) // expect { firstName: 'Steve', age: 25, job: 'developer', funFact: 'I love to eat guavas' };
console.log(personThree) // expect { firstName: 'Bob', age: 25, job: 'developer', funFact: 'I like old cars' };
console.log(personFour) // expect { firstName: 'Gary', age: 25, job: 'developer', funFact: 'I like country music' };
console.log(personFive) // expect { firstName: 'Gary', age: 25, job: 'developer', funFact: 'I like country music', lastName: 'Smith' };
