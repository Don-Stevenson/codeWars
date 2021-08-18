// if odd 3x +1
// if even divide by 2
// 4 2 1
let count = 1;

const calculateNumsTo4 = (num) => {
  console.log(`num is ${num}
count is ${count}
`);
  if (num === 4 || num === 2 || num === 1) {
    console.log("now in the 4 2 1 loop");
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
calculateNumsTo4(27);
