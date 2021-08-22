// if odd 3x +1
// if even divide by 2
// 4 2 1

// set count
let count = 1;

// create a random number
const randomNum = Math.round(Math.random() * 100);

const calculateNumsTo4 = (num) => {
  if (num !== 4) {
    console.log(`num is ${num}
    count is ${count}
    `);
  }
  if (num === 4) {
    console.log(`num is ${num}. 
    Now in the 4 2 1 loop, so +3 to count has been added.`);

    // add 3 because it will take you back to back two 4
    // add count + for 2 and 1 scenarios
    count += 3;
    return console.log(`fThe final count is ${count}
      `);
  }
  if (num % 2 === 0) {
    count++;
    return calculateNumsTo4(num / 2);
  } else count++;
  return calculateNumsTo4(num * 3 + 1);
};

calculateNumsTo4(3); // expect num is 3
// count is 1

// num is 10
// count is 2

// num is 5
// count is 3

// num is 16
// count is 4

// num is 8
// count is 5

// num is 4. 
// Now in the 4 2 1 loop, so +3 to count has been added.
// The final count is 9
//
// calculateNumsTo4(12);
// calculateNumsTo4(27);
// calculateNumsTo4(randomNum);
