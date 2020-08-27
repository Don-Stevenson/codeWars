// const countDownFromNumToZero = (num) => {
//   let baseNum = 0;
//   if (num > baseNum) {
//     console.log(num);
//     return countDownFromNumToZero(num - 76.89);
//   } else return baseNum;
// }
// console.log(countDownFromNumToZero(1000));


const countUpTo = (num) =>  num < 10 ? countUpTo(num+=1) : "done " + num

console.log(countUpTo(0))

// let arr = [1,2,3,[4]]

// const findNumInArray = (num) => {
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       // console.log(typeof item, item)
//       return findNumInArray(item)
//     } else if (item === num) {
//       return `found the number ${item}`
//     }
//   } 
//   return `could not find the number ${num}`
// }

// console.log(findNumInArray({0:4}))