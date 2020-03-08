// with map and test

const pigIt = str => {
  let newStr = str.split(" ");
  let pigLatinStr = newStr.map(element =>
    /[a-zA-Z]+/.test(element)
      ? element.slice(1) + element[0] + "ay"
      : element).join(" ")
   return pigLatinStr
};

console.log(pigIt("hello Pig latin is cool"));
