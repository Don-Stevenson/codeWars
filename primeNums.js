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
  return result;
  //    result.forEach(element => {
  //       console.log(element)
  //   });
};

// checks whether a number is prime or not
//****************************************/

const isPrimeNum = num => {
  // set counter to 0
  let counter = 0;
  // count from 0 up to num using a c style loop
  for (let i = 0; i <= num; i++) {
    // if any instance of num is divisble by i without a remainder, incriment the counter
    if (num % i === 0) {
      counter++;
    }
  }
  // if counter is exactly equal to 2, a prime number is found
  if (counter === 2) {
    return `${num} is a prime number`;
    // otherwise, num is not a prime number
  } else return `${num} is NOT a prime number`;
};
console.log(isPrimeNum(6));
