// a function that returns all the prime numbers between 1 and n
// *************************************************************

const primeNums = n => {
  // set up an empty array hold the prime numbers
  const result = [];
  // C style loop to count from 1 to n
  for (let i = 1; i <= n; i++) {
    // set the counter to 0 for each instance of i
    let counter = 0;
    // Nested C style loop that counts down from whatever i is at the moment to 1
    for (let j = i; j >= 1; j--) {
      // check to see if i is divisible by j without remainder, if it is increase the count by 1
      if (i % j === 0) counter++;
    }
    // if counter is exactly equal to two, this is a prime number so push it into the results array
    if (counter === 2) result.push(i);
  }
  // return the result array
  return result;
};

console.log(primeNums(5));
