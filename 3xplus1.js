// if odd 3x +1
// if even divide by 2
// 4 2 1

// set count
let count = 1;

// create a random number
const randomNum = Math.round(Math.random() * 100);

const calculateNumsTo4 = (num) => {
  console.log(`num is ${num}
    count is ${count}
    `);
  if (num === 4) {
    console.log(`num is ${num} now in the 4 2 1 loop`);

    // add 3 because it will take you back to back two 4
    // add count + for 2 and 1 scenarios
    count += 3;
    return console.log(`final count is ${count}
      `);
  }
  if (num % 2 === 0) {
    count++;
    return calculateNumsTo4(num / 2);
  } else if (num % 2 !== 0) {
    count++;
    return calculateNumsTo4(num * 3 + 1);
  }
};

// calculateNumsTo4(3);
// calculateNumsTo4(12);
// calculateNumsTo4(27);
calculateNumsTo4(randomNum);
