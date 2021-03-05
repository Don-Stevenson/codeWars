// take in a string and update the number of those letters in an object

// "hello" =>
// returns
// {
//  h:1
//  e:1
//  l:2
//  o:1
//}

const letterCounter = (word) => {
  let obj = {};
  const wordLetters = word.split("");

  for (const letter of wordLetters) {
    const key = letter;
    const val = 1;

    if (obj[key]) {
      obj[key] = obj[key] + 1;
    } else obj[key] = val;
  }
  return obj;
};

console.log(letterCounter("hello"))