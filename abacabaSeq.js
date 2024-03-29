//[2021-05-24] Challenge #391 [Easy] The ABACABA sequence
// Background
// The ABACABA sequence is defined as follows: the first iteration is the first
// letter of the alphabet (a). To form the second iteration, you take the second letter
// (b) and put the first iteration (just a in this case) before and after it, to get aba.
// For each subsequent iteration, place a copy of the previous iteration on either
// side of the next letter of the alphabet.

// Here are the first 5 iterations of the sequence:

// a
// aba
// abacaba
// abacabadabacaba
// abacabadabacabaeabacabadabacaba
// The 26th and final iteration (i.e. the one that adds the z)
// is 67,108,863 characters long. If you use one byte for each character,
// this takes up just under 64 megabytes of space.

// Challenge
// Write a program to print the 26th iteration of the ABACABA sequence.

// If it's easier for you, it's also fine to print one character per line,
// instead of all the characters on a single line.

// Just printing the output can take a few minutes,
// depending on your setup. Feel free to test it out on something smaller instead,
// like the 20th iteration, which is only about 1 megabyte.

// Optional bonus
// Complete the challenge using O(n) memory, where n is the iteration number.

// If you don't know what that means, here's another way to say it that's
// roughly equivalent in this case.
// You can have as many variables as you want, but they must each hold either a
// single number or character, or a structure (list, vector, dict, string, map, tree, etc.)
// whose size never gets much larger than 26. If a function calls itself recursively,
// the call stack must also be limited to a depth of about 26.
// (This is definitely an oversimplification, but that's the basic idea.
// Feel free to ask if you want to know about whether any particular approach uses O(n)
// memory.)

const abaFunction = letterNum => {
  let currentIteration = ""
  let charUnicode = 65 // sets unicode to 65, aka "A" as starting point

  // Make a for loop that uses the unicode as the index, the charUnicode +
  // the letternum to get the values of letterNum past A aka charUnicode
  for (let i = charUnicode; i < charUnicode + letterNum; i++) {
    // sets the letter from the unicode, eg. 65 => A
    const letterString = String.fromCharCode(i)

    // sets the current interation as combination of the current iteration plus
    // the letterstring and then the current itteration for each succussive loop
    currentIteration = `${currentIteration}${letterString}${currentIteration}`
  }
  return currentIteration
}
console.log(abaFunction(4))
