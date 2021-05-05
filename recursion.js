// const countDownFromNumToZero = (num) => {
//   let baseNum = 0;
//   if (num > baseNum) {
//     console.log(num);
//     return countDownFromNumToZero(num - 76.89);
//   } else return baseNum;
// }
// console.log(countDownFromNumToZero(1000));


const countDownTo = num =>  num < 10 ? console.log(num, countDownTo(num+=1)) : "done " + num

countDownTo(0)

// expect
// 9 done 10
// 8 undefined
// 7 undefined
// 6 undefined
// 5 undefined
// 4 undefined
// 3 undefined
// 2 undefined
// 1 undefined
// 0 undefined







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