let array = [1,2,3,4,5,6,7,8,9]

const addOne = (groupOfNumbers) => {
  let newNumbers = [];
  for(let item of groupOfNumbers){
    item = item + 1;
    newNumbers.push(item);
  }
  return newNumbers;
}

console.log(addOne(array));