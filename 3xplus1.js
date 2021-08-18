// if odd 3x +1
// if even divide by 2
// 4 2 1

const calculateNumsTo4 = (num) => {
  console.log("num is ", num);
  if (num === 4 || num === 2 || num === 1)
    return console.log("now in the 4 2 1 loop");
  if (num % 2 === 0) return calculateNumsTo4(num / 2);
  else if (num % 2 !== 0) return calculateNumsTo4(num * 3 + 1);
};

calculateNumsTo4(3);
calculateNumsTo4(12);
