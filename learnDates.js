// a place to learn about dates in JS
// **********************************

const date = new Date();
console.log(date);
const [monthNum, caldendarDateNum, year] = new Date()
  .toLocaleDateString("en-US")
  .split("/");
console.log({ monthNum }, { caldendarDateNum }, { year });

// expect:
// 2021-03-13T16:28:46.930Z
// { monthNum: '3' } { caldendarDateNum: '13' } { year: '2021' }