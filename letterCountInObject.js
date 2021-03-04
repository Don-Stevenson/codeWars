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
  for (let i = 0; i < word.length; i++) {
    // console.log(word[i]);
    if (!obj[i]) {
    //   console.log("right here", word[i]);
      obj += word[i];
      console.log("obj", Object.values(obj))
    } else obj += word[i];
    // console.log("hi", word[i]);
  }
  return obj;
};

letterCounter("hello");
