// trying out the difference between filitering to a new array vs pushing

// even nums with push

const returnEvens = (array) => {
  let evenArray = [];
  array.map((e) => {
    if (e % 2 === 0) {
      evenArray.push(e);
    }
  });
  return evenArray;
};

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(returnEvens(arr));
// expect
// [ 2, 4, 6, 8, 10 ]