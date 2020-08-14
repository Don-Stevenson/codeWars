// In this kata you will have to calculate fib(n) where:

// fib(0) := 0
// fib(1) := 1
// fin(n + 2) := fib(n + 1) + fib(n)
// Write an algorithm that can handle n up to 2,000,000.

// Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.

// HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)?
// Use this to reason what value fib has to have for negative values.

// HINT II: See https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4

// generate a list of numbers
// create a list of fib numbers to n

const fib = n => {
  if (n >= 0) return getPostiveFib(n);
  else {
    // handling fibonacci of negative numbers
    return BigInt(Math.pow(-1, -n + 1)) * getPostiveFib(-n);
  }
};

// handling fibonacci of positive numbers
const getPostiveFib = num => {
  let a = 1;
  let b = 0;
  let temp;
  num = num - 1;

  while (num >= 0) {
    (temp = a), (a = a + b);
    b = temp;
    num--;
  }

  return BigInt(b);
};

console.log(fib(-6));
