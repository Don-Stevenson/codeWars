const primeNums = n => {
  const result = [];
  for (let i = 0; i < n; i++) {
    let counter = 0;
    for (let j = i; j >= 1; j--) {
      if (i % j === 0) counter++;
    }
    if (counter === 2) result.push(i);
    //   console.log(counter);
  }
  console.log(result);
  return result;
};

primeNums(12);


