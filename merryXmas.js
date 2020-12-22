// function that prints merry Xmas!
// ********************************

const merryXmasWisher = (num) => {
  const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !";
  let result = [];

  // while result is !== Merry Christmas in an array
  while (result !== ["M", "E"]) {
    
  for (let i = 1; i <= num; i++) {
      let randNum = Math.round(Math.random() * i);
      // console.log(randNum);

      // if result[0] is empty is true then put an M there
      if (!result[0] && randNum === 12)
        result.splice(0, 0, alphBetStr[randNum]);
      // if result[1] is empty is true then put an E there
      else if (!result[1] && randNum === 4)
        result.splice(1, 0, alphBetStr[randNum]);
    }

    //
  }
  console.log(result);
};

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

merryXmasWisher(10000);
