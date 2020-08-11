// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

const sumStrings = (a, b) => {
  const sum = parseInt(a) + parseInt(b);
  return sum.toLocaleString('fullwide', {useGrouping:false, maximumSignificantDigits:21});
};

console.log(sumStrings("1235666677777777", "666666666666666666777456"));
