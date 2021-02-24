// takes in a string and splits the digits then organizes them, puts them in to a string
const flipbits = str => str.split('').map(b => (1 - b).toString()).join('');
// console.log(flipbits('100'))

// to remove any zeros before the first 1
const removeZeros = str => {
  for (const i in str) {
    if (str[i] == 1) return str.slice(i,str.length)
  }
}
console.log(removeZeros('0010101000'))

// takes in a base10 and returns number and regular number
const changeAds = base10 => {
    //change base 10 into a string that is base 2
  const base2 = base10.toString(2);
  console.log("base2 is", base2)
  
  // 
  const mask = removeZeros(flipbits(base2));
  console.log("mask is :", mask)
  //find the regular number from the mask, to base 2
  return parseInt(mask,2);
}

// console.log(changeAds(010))