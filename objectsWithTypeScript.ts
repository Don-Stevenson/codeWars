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
  firstName: "Jim",
  age: 29,
  job: "Airplane Pilot",
  funFact: "I like country skydiving",
  lastName: "Smith",
}
const personSix: Person = {
  firstName: "Steve",
  age: 33,
  job: "Army Soldier",
  funFact: "I run marathons",
  lastName: "Jones",
}
const personSeven: Person = {
  firstName: "Susan",
  age: 63,
  job: "Artist",
  funFact: "I love documentaries",
  lastName: "Johnson",
}

const personEight: Person = {
  firstName: "Jack",
  age: 48,
  job: "Banker",
  funFact: "I like to read",
  lastName: "Limoges",
}

const personNine: Person = {
  firstName: "Amy",
  age: 22,
  job: "Chef",
  funFact: "I like pepperoni pizza",
  lastName: "Lopez",
}

const personTen: Person = {
  firstName: "Alex",
  age: 76,
  job: "retired",
  funFact: "I like traveling",
  lastName: "Morgan",
}

console.log(personOne) // expect { firstName: 'Jack', age: 25,   job: 'developer', funFact: 'I love to play the guitar' };
console.log(personTwo) // expect { firstName: 'Steve', age: 25, job: 'developer', funFact: 'I love to eat guavas' };
console.log(personThree) // expect { firstName: 'Bob', age: 25, job: 'Teacher', funFact: 'I like old cars' };
console.log(personFour) // expect { firstName: 'Gary', age: 65, job: 'Custodian', funFact: 'I like country music' };
console.log(personFive) // expect { firstName: 'Jim', age: 29, job: 'Airplane Pilot', funFact: 'I like country skydiving', lastName: 'Smith' };
console.log(personSix) // expect { firstName: 'Steve', age: 33, job: 'Army Soldier', funFact: 'I run marathons', lastName: 'Jones' };
console.log(personSeven) // expect { firstName: 'Susan', age: 63, job: 'Artist', funFact: 'I love documentaries', lastName: 'Johnson' };
console.log(personEight) // expect { firstName: 'Jack', age: 48, job: 'Banker', funFact: 'I like to read', lastName: 'Limoges' };
console.log(personNine) // expect { firstName: 'Amy', age: 22, job: 'Chef', funFact: 'I like pepperoni pizza', lastName: 'Lopez' };
console.log(personTen) // expect { firstName: 'Alex', age: 76, job: 'retired', funFact: 'I like traveling', lastName: 'Morgan' };

type CatName = "miffy" | "boris" | "mordred"

interface CatInfo {
  age: number
  breed: string
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
}

console.log(cats.boris) //expect  age: 5, breed: "Maine Coon"
console.log(cats.miffy) // expect  age: 10, breed: "Persian"
console.log(cats.mordred) // expect age: 16, breed: "British Shorthair"
