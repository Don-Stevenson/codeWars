// function that moves zeros to the end of an array
// ************************************************

const moveZeros = (arr) => {
  let arrOfZeros = [];
  let arrWithoutZeros = [];
  for (const item of arr) {
    item === 0 ? arrOfZeros.push(item) : arrWithoutZeros.push(item);
  }
  return (finalArr = [...arrWithoutZeros, ...arrOfZeros]);
};

console.log(moveZeros([0, 1, 4, 45, 0, 0, 7, 9]));
// expected result [  1, 4, 45, 7,  9, 0,  0, 0 ]
