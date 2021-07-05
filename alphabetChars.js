// contains all letters?
// *********************

// a function that checks if a string contains all the letters from the alphabet

// const containsAllLetters = str => {
//   const alpha = new Set("abcdefghijklmnopqrstuvwxyz");
//   for (const c of str.toLowerCase()) {
//     alpha.delete(c);
//     if (alpha.size === 0) return true;
//   }
//   return false;
// };

// with map

const containsAllLetters = (str) => {
  // make a set with all letters of the alphabet
  const alphaBet = new Set("abcdefghijklmnopqrstuvwxyz");

  // make the input string lowercase, then split it into an array
  str
    .toLowerCase()
    .split("")
    // map over the string and delete from the alphabet set each letter from the input string
    .map((e) => {
      // delete each element of the array alphabet
      alphaBet.delete(e);
    });

  // if alphabet array size is 0, return true else return false
  return !alphaBet.size ? true : false;
};

console.log(containsAllLetters("the quick brown fox jumps over the lazy dog"));
// expect:
// true

console.log(containsAllLetters("the quic brown fox jumps over the lazy dog"));
// expect:
// false
