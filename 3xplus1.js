// if odd 3x +1
// if even divide by 2
// 4 2 1

const calculateNumsTo4 = (num) => {
  if (num % 2 === 0) {
    console.log("num is ", num);
    return calculateNumsTo4(num / 2);
  } else if (num % 2 !== 0) {
    console.log("num is ", num);
    return calculateNumsTo4(num * 3 + 1);
  } else if (num === 4 || num === 2 || num === 1) return "in the 4 2 1 loop";
};
