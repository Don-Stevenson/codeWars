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

const unicodeArr = [
  "\u0041",
  "\u0042",
  "\u0043",
  "\u0044",
  "\u0045",
  "\u0046",
  "\u0047",
  "\u0048",
  "\u0049",
  "\u004A",
  "\u004B",
  "\u004C",
  "\u004D",
  "\u004E",
  "\u004F",
  "\u0050",
  "\u0051",
  "\u0052",
  "\u0053",
  "\u0054",
  "\u0055",
  "\u0056",
  "\u0057",
  "\u0058",
  "\u0059",
  "\u005A",
  "\u0021",
];
console.log(unicodeArr);

// Latin
// Alphabet:
// Uppercase
// U+0041	A	
// U+0042	B	
// U+0043	C	
// U+0044	D	
// U+0045	E	
// U+0046	F	
// U+0047	G	
// U+0048	H	
// U+0049	I	
// U+004A	J	
// U+004B	K	
// U+004C	L	
// U+004D	M	
// U+004E	N	
// U+004F	O	
// U+0050	P	
// U+0051	Q	
// U+0052	R	
// U+0053	S	
// U+0054	T	
// U+0055	U	
// U+0056	V	
// U+0057	W	
// U+0058	X	
// U+0059	Y	
// U+005A	Z	

const makeResult = (inputStr) => {
  let result = "";
  // while result is !== ME in an array
  // update to unicode for the string!

  // UPDATE => then just keep calling this with different letters
  // then unicode instead of 15 functions
  // while (result !== inputStr) {
  // console.log('\u00E9')
  while (result !== inputStr) {
    let randNum = Math.floor(Math.random() * 28);
    // console.log(inputStr[0] + inputStr[1]);
    // console.log("here", alphBetStr.indexOf(inputStr[0]));
    // console.log({ randNum });
    if (inputStr[0] === inputStr[1]) {
      if (randNum === alphBetStr.indexOf(inputStr[0])) {
        // if (randNum === 12) {
        // console.log("here");
        result = replaceAt(0, alphBetStr[randNum], result);
        result = replaceAt(1, alphBetStr[randNum], result);
      }
    } else {
      // alphBetStr.indexOf(inputStr[0])
      // console.log("here now");
      if (randNum === alphBetStr.indexOf(inputStr[0])) {
        // if (randNum === 12) {
        result = replaceAt(0, alphBetStr[randNum], result);
        // } else if (randNum === 4) {
      } else if (randNum === alphBetStr.indexOf(inputStr[1])) {
        result = replaceAt(1, alphBetStr[randNum], result);
      }
    }
  }
  // console.log({ result });
  return result;
};

console.log(
  makeResult("ME") +
    makeResult("RR") +
    makeResult("Y ") +
    makeResult("CH") +
    makeResult("RI") +
    makeResult("ST") +
    makeResult("MA") +
    makeResult("S ") +
    makeResult("SA") +
    makeResult("SH") +
    makeResult("A ") +
    makeResult("AN") +
    makeResult("D ") +
    makeResult("AN") +
    makeResult("DR") +
    makeResult("EW") +
    makeResult("!")
);

// random number generator to 1 27
// call it for character we want
// 5 space 10
// if gen numb 12 print alpha string[gen num]
// printing something while you wait for the results/
// print current random number???

// start by placing XXXXXXXXXXXXX
// filling in the X's and fill in the message
