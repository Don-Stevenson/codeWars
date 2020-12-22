// function that prints merry Xmas!
// ********************************

const merryXmasWisher = (num) => {
  const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !";
  for (let i = 1; i <= num; i++) {
    let randNum = Math.round(Math.random() * i);
    // console.log(randNum);
    if (randNum === 12) console.log(alphBetStr[randNum]);
    else if (randNum === 4) console.log(alphBetStr[randNum]);
  }
  // }

  // console.log(
  //   `${alphBetStr[12]}${alphBetStr[4]}${alphBetStr[17]}${alphBetStr[17]}${alphBetStr[24]}${alphBetStr[26]}${alphBetStr[2]}${alphBetStr[7]}${alphBetStr[17]}${alphBetStr[8]}${alphBetStr[18]}${alphBetStr[19]}${alphBetStr[12]}${alphBetStr[0]}${alphBetStr[18]}${alphBetStr[27]}`
  // );

  // random number generator to 1 27
  // call it for character we want
  // 5 space 10
  // if gen numb 12 print alpha string[gen num]
  // printing something while you wait for the results/
  // print current random number???

  // start by placing XXXXXXXXXXXXX
  // filling in the X's and fill in the message
};

merryXmasWisher(1000);
