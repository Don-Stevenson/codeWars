// place for Davey to learn Recursion
// **********************************

// make a function that finds a in a deeply nested array


// the nested array
const nestedArray = [[[3, [[[[[[[[[[[[[[2, "a"]]]]]]]]]]]]]]]]];


// a non nested array
const array = [1, 2, 3, 4, 5, 6, 7, 8, "a", 5];

// function that finds the string "a" in a nested array

const findsA = arr => {
  for (const item of arr) {
    console.log({ item });
    if (Array.isArray(item)) {
      console.log("here at an array, going down to the next level...");
      return findsA(item);
    } else if (item === "a") {
      return "found a";
    }
  }
  return "didn't find a";
};

// console.log(findsA(array));
// expect:
// { item: 1 }
// { item: 2 }
// { item: 3 }
// { item: 'a' }
// found a

console.log(findsA(nestedArray));
// expect :
// { item: [ [ 3, [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ 3, [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: 3 }
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ [Array] ] ] }
// here at an array, going down to the next level...
// { item: [ [ 0, 'a' ] ] }
// here at an array, going down to the next level...
// { item: [ 0, 'a' ] }
// here at an array, going down to the next level...
// { item: 0 }
// { item: 'a' }
// found a
