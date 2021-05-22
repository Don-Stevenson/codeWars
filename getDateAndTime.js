const date = "12/08/2020";

const day = parseInt(date.slice(0, 2));
const month = parseInt(date.slice(3, 5));
const year = parseInt(date.slice(6, 8));
console.log({ day });
console.log({ month }, { year });
// expect:
// { day: 12 }
// { month: 8 } { year: 20 }
