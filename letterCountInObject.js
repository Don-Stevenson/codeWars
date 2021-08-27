// take in a string and update the number of those letters in an object

// "hello" =>
// returns
// {
//  h:1
//  e:1
//  l:2
//  o:1
//}

// declare the function and take in a word as a paramater
// const letterCounter = word => {

//   // set an empty object
//   let obj = {};
  
//   // split word into an array of letters
//   const wordLetters = word.split("");

//   // for every leller in the array
//   for (const letter of wordLetters) {
    
//     // set the key to each letter
//     const key = letter;
    
//     // set the value to one
//     const val = 1;

//     // if the object has the letter as a key already then update the object's value at that key +1
//     if (obj[key]) {
//       obj[key] = obj[key] + 1;

//       // else set the object key to the letter and set the value to 1
//     } else obj[key] = val;
//   }
//   return obj;
// };

// expect { h: 1, e: 1, l: 2, o: 1 }

// with map
// ***********

const letterCounter = word => {
  
  // set an empty object
  let obj = {};
  
  // split word into an array of letters
  const wordLetters = word.split("").map(e=> console.log(e));
  
  // for every leller in the array
  // for (const letter of wordLetters) {
    
    // set the key to each letter
    // const key = letter;
    
    // set the value to one
    // const val = 1;
    
    // // if the object has the letter as a key already then update the object's value at that key +1
    // if (obj[key]) {
    //   obj[key] = obj[key] + 1;
      
    //   // else set the object key to the letter and set the value to 1
    // } else obj[key] = val;
    // // }
    // return obj;
  };
  
  console.log(letterCounter("hello"))