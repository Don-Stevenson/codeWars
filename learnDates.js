// a place to learn about dates in JS
// **********************************

const date = new Date()
const [monthNum, caldendarDateNum, year] = new Date()
  .toLocaleDateString("en-US")
  .split("/")
console.log({ monthNum }, { caldendarDateNum }, { year })

// expect:
// { monthNum: '3' } { caldendarDateNum: '13' } { year: '2021' }
