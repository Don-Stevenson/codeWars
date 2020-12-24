// function that prints merry Xmas!
// ********************************

// a rube goldberg approach
// ************************

const replaceAt = (index, char, str) => {
  const a = str.split("");
  a[index] = char;
  return a.join("");
};
const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !";

const makeResult = () => {
  let result = "";
  // while result is !== Merry Christmas in an array
  // update to unicode for the string!
  while (result !== "ME") {
    let randNum = Math.floor(Math.random() * 27);
    // console.log(randNum)
    if (randNum === 12) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 4) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  console.log({ result });
  return result;
};

const makeResult2 = () => {
  let result2 = "";
  while (result2 !== "RR") {
    let randNum = Math.floor(Math.random() * 27);
    // console.log(randNum);

    if (randNum === 17) {
      // console.log("result 0", result2[0]);
      // console.log("here", alphBetStr[randNum]);

      result2 = replaceAt(0, alphBetStr[randNum], result2);
      result2 = replaceAt(1, alphBetStr[randNum], result2);
      // console.log({ result2 });
    }
  }
  console.log({ result2 });
  return result2;
};

const makeResult3 = () => {
  let result3 = "";
  while (result3 !== "Y ") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 24) {
      // console.log("result 0", result3[0]);
      // console.log("here", alphBetStr[randNum]);
      result3 = replaceAt(0, alphBetStr[randNum], result3);
      // console.log({ result3 });
    } else if (randNum === 26) {
      result3 = replaceAt(1, alphBetStr[randNum], result3);
    }
  }
  console.log({ result3 });
  return result3;
};

const makeResult4 = () => {
  let result4 = "";
  while (result4 !== "CH") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 2) {
      result4 = replaceAt(0, alphBetStr[randNum], result4);
    } else if (randNum === 7) {
      result4 = replaceAt(1, alphBetStr[randNum], result4);
    }
  }
  console.log({ result4 });
  return result4;
};

const makeResult5 = () => {
  let result5 = "";
  while (result5 !== "RI") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 17) {
      result5 = replaceAt(0, alphBetStr[randNum], result5);
    } else if (randNum === 8) {
      result5 = replaceAt(1, alphBetStr[randNum], result5);
    }
  }
  console.log({ result5 });
  return result5;
};

const makeResult6 = () => {
  let result6 = "";
  while (result6 !== "ST") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 18) {
      result6 = replaceAt(0, alphBetStr[randNum], result6);
    } else if (randNum === 19) {
      result6 = replaceAt(1, alphBetStr[randNum], result6);
    }
  }
  console.log({ result6 });
  return result6;
};
const makeResult7 = () => {
  let result7 = "";
  while (result7 !== "MA") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 12) {
      result7 = replaceAt(0, alphBetStr[randNum], result7);
    } else if (randNum === 0) {
      result7 = replaceAt(1, alphBetStr[randNum], result7);
    }
  }
  console.log({ result7 });
  return result7;
};

const makeResult8 = () => {
  let result8 = "";
  while (result8 !== "S!") {
    let randNum = Math.floor(Math.random() * 27 + 1);
    // console.log(randNum);
    if (randNum === 18) {
      result8 = replaceAt(0, alphBetStr[randNum], result8);
    }
    else if (randNum === 27) {
      result8 = replaceAt(1, alphBetStr[randNum], result8);
    }
  }
  console.log({ result8 });
  return result8;
};

console.log(
  makeResult() +
    makeResult2() +
    makeResult3() +
    makeResult4() +
    makeResult5() +
    makeResult6() +
    makeResult7() +
    makeResult8()
);

// console.log(result())
// result = replaceAt(4, alphBetStr[randNum], result);
// else if (!result[5] && randNum === 26)
//  result = replaceAt(5, alphBetStr[randNum], result);
// else if (!result[6] && randNum === 2)
//  result = replaceAt(6, alphBetStr[randNum], result);
// else if (!result[7] && randNum === 7)
//  result = replaceAt(7, alphBetStr[randNum], result);
// else if (!result[8] && randNum === 17)
//  result = replaceAt(8, alphBetStr[randNum], result);
// else if (!result[9] && randNum === 8)
//  result = replaceAt(9, alphBetStr[randNum], result);
// else if (!result[10] && randNum === 18)
//  result = replaceAt(10, alphBetStr[randNum], result);
// else if (!result[11] && randNum === 19)
//  result = replaceAt(11, alphBetStr[randNum], result);
// else if (!result[12] && randNum === 12)
//  result = replaceAt(12, alphBetStr[randNum], result);
// else if (!result[13] && randNum === 0)
//  result = replaceAt(13, alphBetStr[randNum], result);
// else if (!result[14] && randNum === 18)
//  result = replaceAt(14, alphBetStr[randNum], result);
// else if (!result[15] && randNum === 27)
//  result = replaceAt(15, alphBetStr[randNum], result);
// //

// }

// console.log(
//   `${alphBetStr[12]}${alphBetStr[4]}${alphBetStr[17]}${alphBetStr[17]}${alphBetStr[24]}$   {alphBetStr[26]}${alphBetStr[2]}${alphBetStr[7]}${alphBetStr[17]}${alphBetStr[8]}${alphBetStr[18]}
// ${alphBetStr[19]}${alphBetStr[12]}${alphBetStr[0]}${alphBetStr[18]}${alphBetStr[27]}`
// );

// random number generator to 1 27
// call it for character we want
// 5 space 10
// if gen numb 12 print alpha string[gen num]
// printing something while you wait for the results/
// print current random number???

// start by placing XXXXXXXXXXXXX
// filling in the X's and fill in the message

// result();
// result2();
// result3();
// result4();
