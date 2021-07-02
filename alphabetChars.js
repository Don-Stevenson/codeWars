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
  const alpha = new Set("abcdefghijklmnopqrstuvwxyz");
  str
    .toLowerCase()
    .split("")
    .map((e) => {
      alpha.delete(e);
    });

  if (alpha.size === 0) return true;
  else return false;
};

console.log(containsAllLetters("the quick brown fox jumps over the lazy dog"));
// expect:
// true

console.log(containsAllLetters("the quic brown fox jumps over the lazy dog"));
// expect:
// false
