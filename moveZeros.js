const moveZeros = (arr) => {
  let arrOfZeros = [];
  let arrWithoutZeros = [];
  for (let item of arr) {
    item === 0 ? arrOfZeros.push(item) : arrWithoutZeros.push(item);
  }
  return finalArr = [...arrWithoutZeros, ...arrOfZeros]
}
