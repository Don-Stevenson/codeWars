// // function that takes in a str and returns a hashtag

// const generateHashtag = str => {
//   let newStrArr = str.split(" ");
//   let newArr = [];
//   for (let word of newStrArr) {
//     newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
//   }
//   return `#${newArr.join("")}`;
// };

// with a forEach
const generateHashtag = str => {
  if (!str) return false;
  else if (str.length >= 140) return false;
  else {
    const newStrArr = str.trim().split(" ");
    let newArr = [];
    newStrArr.map(element => {
      newArr.push(element.charAt(0).toUpperCase() + element.slice(1));
    });
    return `#${newArr.join("")}`;
  }
};

console.log(generateHashtag("  code   wars   "));
