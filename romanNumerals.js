const RomanNumerals = {
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
      I: 1
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
  fromRoman: romanNum =>{}
};

// console.log("roman num to arabic nums ", RomanNumerals.fromRoman("XII"));
console.log("arabic num to Roman nums", RomanNumerals.toRoman(201));
