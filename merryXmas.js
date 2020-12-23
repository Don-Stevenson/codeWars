// function that prints merry Xmas!
// ********************************

const replaceAt = (index, char, str) => {
  const a = str.split("");
  a[index] = char;
  return a.join("");
};

const merryXmasWisher = (num) => {
  const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !";
  let result = "";

  // while result is !== Merry Christmas in an array
  // update to unicode for the string!
  while (result !== "MERRY CHRISTMAS!") {
    // use number other than num, since if num is large, it will be out of the alphastr array range
    // for (let i = 1; i <= num; i++) {
    let randNum = Math.floor(Math.random() * 27);
    // console.log(randNum);

    // if result[0] is empty is true then put an M there
    if (!result[0] && randNum === 12)  replaceAt(0, alphBetStr[randNum], result);
    // if result[1] is empty is true then put an E there
    else if (!result[1] && randNum === 4)  replaceAt(1, alphBetStr[randNum], result);
    // result.splice(1, 0, alphBetStr[randNum]);
    // }
    else if (!result[2] && randNum === 17)
      replaceAt(2, alphBetStr[randNum], result);
    else if (!result[3] && randNum === 17)
      replaceAt(3, alphBetStr[randNum], result);
    else if (!result[4] && randNum === 24)
      replaceAt(4, alphBetStr[randNum], result);
    else if (!result[5] && randNum === 26)
      replaceAt(5, alphBetStr[randNum], result);
    else if (!result[6] && randNum === 2)
      replaceAt(6, alphBetStr[randNum], result);
    else if (!result[7] && randNum === 7)
      replaceAt(7, alphBetStr[randNum], result);
    else if (!result[8] && randNum === 17)
      replaceAt(8, alphBetStr[randNum], result);
    else if (!result[9] && randNum === 8)
      replaceAt(9, alphBetStr[randNum], result);
    else if (!result[10] && randNum === 18)
      replaceAt(10, alphBetStr[randNum], result);
    else if (!result[11] && randNum === 19)
      replaceAt(11, alphBetStr[randNum], result);
    else if (!result[12] && randNum === 12)
      replaceAt(12, alphBetStr[randNum], result);
    else if (!result[13] && randNum === 0)
      replaceAt(13, alphBetStr[randNum], result);
    else if (!result[14] && randNum === 18)
      replaceAt(14, alphBetStr[randNum], result);
    else if (!result[15] && randNum === 27)
      replaceAt(15, alphBetStr[randNum], result);
    //
    console.log(result);
  }
};

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

merryXmasWisher(100);
