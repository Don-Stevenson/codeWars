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
    let newStrArr = str.split(" ");
    let newArr = [];
    newStrArr.forEach(element => {
        newArr.push(element.charAt(0).toUpperCase() + element.slice(1));
    });
    return `#${newArr.join("")}`;
};

console.log(generateHashtag("hi there I am great"));