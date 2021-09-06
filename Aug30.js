// filtering an array and return numbers that are even
//

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenFilter = array => array.filter(e => e % 2 === 0);

console.log(evenFilter(numberArray)); // => [ 2, 4, 6, 8, 10 ]
