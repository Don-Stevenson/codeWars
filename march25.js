// function that reverse str
//***************************/

const reverseString = str => {
  let newStr = str.split("").reverse().join();
  console.log(newStr);
};

console.log(reverseString("hello"));
