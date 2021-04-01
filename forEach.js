const arr = [1, 2, 3, 4, 5, 6];

// with c style loop

const cStyleLoop = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

cStyleLoop(arr);

// with for of loop

const forOfLoop = function (arr) {
  for (const number of arr) {
    console.log(number);
  }
};
forOfLoop(arr);

// with forEach

const tryForEach = function (arr) {
  arr.forEach((number) => console.log(number));
};

tryForEach(arr);
