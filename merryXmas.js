// function that prints an Xmas Message
// a rube goldberg approach
// by Don Stevenson
// *************************************

// a string that contains the letters of the alphabet
const alphBetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !";

// a function that replaces characters at a certain spot in a string
const replaceAt = (index, char, str) => {
  const a = str.split("");
  a[index] = char;
  return a.join("");
};

// a function that takes in a string, generates a random number,
// matches that number to the input and then returns a string with the correct output
const makeResult = (input) => {
  let result = "";

  while (result !== input) {
    const randNum = Math.floor(Math.random() * 28);

    // handling double input letters
    if (input[0] === input[1] && randNum === alphBetStr.indexOf(input[0])) {
      result = replaceAt(0, alphBetStr[randNum], result);
      result = replaceAt(1, alphBetStr[randNum], result);
    }
    // handling two different input letters
    else if (randNum === alphBetStr.indexOf(input[0])) {
      result = replaceAt(0, alphBetStr[randNum], result);
    } else if (randNum === alphBetStr.indexOf(input[1])) {
      result = replaceAt(1, alphBetStr[randNum], result);
    }
  }
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
    makeResult("IA") +
    makeResult("N") +
    makeResult("!")
);
