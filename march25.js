// function that reverse str
//***************************/

const reverseString = str => {
  let splitStr = str.split("");
  return splitStr.reverse();
};

console.log(reverseString("hello"));
