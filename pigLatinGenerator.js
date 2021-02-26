// Function that returns Pig Latin from a given string
// ***************************************************

// with map, test and regex
// ************************

const pigIt = str => {
  const splitStr = str.split(" ");
  return pigLatinStr = splitStr.map(element =>
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
