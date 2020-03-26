// function that reverse str
//***************************/

const reverseString = str => {
  let newStr = str.split("").reverse();

  return newStr.filter(e => console.log(e));
};

console.log(reverseString("hello"));
