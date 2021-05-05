// practicing recursion to find embeded elements with in an array
// **************************************************************

let arr = [[[[[1, [[2, [[3, ["b"]]]]]]]]]];

const findLetterB = (arr) => {
  for (const item of arr) {
    if (Array.isArray(item)) {
      console.log("...going to the next nested array");
      return findLetterB(item);
    } else if (item === "b") {
      return `found ${item} here`;
    }
  }
  return `didn't find 'b' anywhere`;
};
// console.log(findLetterB(arr))

// expect
// ...going to the next nested array
// ...going to the next nested array
// ...going to the next nested array
// ...going to the next nested array
// ...going to the next nested array
// ...going to the next nested array
// ...going to the next nested array
// ...going to the next nested array
// ...going to the next nested array
// found b here
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// counting up with recursion
// **************************
const countUsingRecursion = (count) => {
  if (count < 10) {
    console.log(count);
    return countUsingRecursion(count + 1);
  }
  return count;
};
// console.log(countUsingRecursion(0))

// expect
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// counting down with recursion
//*****************************/
const countDownFrom = (count) => {
  if (count > 0) {
    console.log(count);
    return countDownFrom(count - 1);
  }
  return count;
};
// console.log(countDownFrom(10))
// expect
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// old way of counting up, c style loop
// *************************************
const oldCounter = (countTo) => {
  for (let i = 0; i <= countTo; i++) {
    console.log(`the count is: ${i}`);
  }
};

// oldCounter(10);

// expect
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// old way of counting down, c style loop
// ***************************************
const oldCountDown = (countFrom) => {
  for (let i = countFrom; i >= 0; i--) {
    console.log(`the count is: ${i}`);
  }
};
// oldCountDown(10);

// expect
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
