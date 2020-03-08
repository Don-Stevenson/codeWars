// with map and test
// *****************

const pigIt = str => {
  let newStr = str.split(" ");
  return pigLatinStr = newStr.map(element =>
    /[a-zA-Z]+/.test(element)
      ? element.slice(1) + element[0] + "ay"
      : element).join(" ")
};

// with replace
// where \w is the first character and \w+ is the rest of the word
// which got to $1 and $2 respectively
// ************
// const pigIt = (str) => {return str.replace(/(\w)(\w+)/g, '$2$1ay')};



console.log(pigIt("hello Pig latin is cool"));
