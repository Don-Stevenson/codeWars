// take in a number and return a non negative factorial product of all the numbers.
// if n is below 0 or above 12, throw a range error

const factorial = n => {
  if (n < 0 || n > 12) {
    return RangeError;
  } else console.log(n);
};

console.log(factorial(2));