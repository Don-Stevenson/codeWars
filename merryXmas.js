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
  // while result is !== ME in an array
  // update to unicode for the string!
  while (result !== "ME") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 12) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 4) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result });
  return result;
};

const makeResult2 = () => {
  let result = "";
  while (result !== "RR") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 17) {
      result = replaceAt(0, alphBetStr[randNum], result);
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result });
  return result;
};

const makeResult3 = () => {
  let result = "";
  while (result !== "Y ") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 24) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 26) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result });
  return result;
};

const makeResult4 = () => {
  let result = "";
  while (result !== "CH") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 2) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 7) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result4 });
  return result;
};

const makeResult5 = () => {
  let result = "";
  while (result !== "RI") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 17) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 8) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result5 });
  return result;
};

const makeResult6 = () => {
  let result = "";
  while (result !== "ST") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 18) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 19) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result6 });
  return result;
};
const makeResult7 = () => {
  let result = "";
  while (result !== "MA") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 12) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 0) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result7 });
  return result;
};

const makeResult8 = () => {
  let result = "";
  while (result !== "S!") {
    let randNum = Math.floor(Math.random() * 27 + 1);
    if (randNum === 18) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 27) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result });
  return result;
};

const makeResult9 = () => {
  let result = "";
  while (result !== " S") {
    let randNum = Math.floor(Math.random() * 27 + 1);
    if (randNum === 26) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 18) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result });
  return result;
};

const makeResult10 = () => {
  let result = "";
  while (result !== "AS") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 0) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 18) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result });
  return result;
};

const makeResult11 = () => {
  let result = "";
  while (result !== "HA") {
    let randNum = Math.floor(Math.random() * 27);
    if (randNum === 7) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === 0) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
  // console.log({ result });
  return result;
};

console.log(
  makeResult() +
    makeResult2() +
    makeResult3() +
    makeResult4() +
    makeResult5() +
    makeResult6() +
    makeResult7() +
    makeResult8() +
    makeResult9() +
    makeResult10() +
    makeResult11()
);

// random number generator to 1 27
// call it for character we want
// 5 space 10
// if gen numb 12 print alpha string[gen num]
// printing something while you wait for the results/
// print current random number???

// start by placing XXXXXXXXXXXXX
// filling in the X's and fill in the message
