let integers = [2, 4, 0, 100, 4, 11, 2602, 36]

function findOutlier(integers) {
  let evenIntsArr = integers.filter(x => x % 2 === 0);
  let oddIntsArr = integers.filter(x => x % 2 !== 0);
  return oddIntsArr.length > 1 ? evenIntsArr[0] : oddIntsArr[0];
}

findOutlier(integers)