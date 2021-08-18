const RomanNumerals = {
  // function that creates a roman numeral based on an arabic number input
  //**********************************************************************/
  toRoman: num => {
    const romanKeyObj = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let romanNum = "";
    for (let index in romanKeyObj) {
      while (num >= romanKeyObj[index]) {
        romanNum += index;
        num -= romanKeyObj[index];
      }
    }
    return romanNum;
  },
  
  fromRoman: romanNum => {
    // function that creates an arabic numeral based on an roman numeral input
    //***********************************************************************/
    const romanKeyObj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let total = 0;
    let input = romanNum.split("");

    for (let i = 0; i < input.length; i++) {
      let currentLetter = romanKeyObj[input[i]];
      let nextLetter = romanKeyObj[input[i + 1]];
      if (currentLetter === undefined) return null;
      else {
        if (currentLetter < nextLetter) {
          total += nextLetter - currentLetter;
          i++;
        } else total += currentLetter;
      }
    }
    return total;
  },
};

console.log("roman num to arabic nums ", RomanNumerals.fromRoman("XII"));
console.log("arabic num to Roman nums", RomanNumerals.toRoman(201));
