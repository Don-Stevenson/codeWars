// trying loops, for each, map on an array
// ***************************************

// the array
const arr = [1, 2, 3, 4, 5, 6];

// with c style loop
const cStyleLoop = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// cStyleLoop(arr);
// expect
// 1
// 2
// 3
// 4
// 5
// 6

// with for of loop

const forOfLoop = function (arr) {
  for (const number of arr) {
    console.log(number);
  }
};

// forOfLoop(arr);
// expect
// 1
// 2
// 3
// 4
// 5
// 6


// with forEach

const tryForEach = function (arr) {
  arr.forEach((number) => console.log(number));
};

// tryForEach(arr);
// expect
// 1
// 2
// 3
// 4
// 5
// 6


// with Map
// ********
const tryMap = (arr) => {
  arr.map((element) => console.log(element));
};

tryMap(arr);

// expect
// 1
// 2
// 3
// 4
// 5
// 6
