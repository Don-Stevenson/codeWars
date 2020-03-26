// function that reverse str
//***************************/

const reverseString = str => {
  let reverseStr = str
    .split("")
    .reverse()
    .join("");
  return reverseStr;
};

console.log(reverseString("hello"));
