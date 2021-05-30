// place for Davey to learn Recursion
// **********************************

// make a function that finds a in a deeply nested array

const nestedArray = [[[3,[[[[[[[[[[[[[[0, "a"]]]]]]]]]]]]]]]]];

const array = [1, 2, 3, "a", 5];

const findsA = (arr) => {
  for (const item of arr) {
    console.log({ item });
    if (Array.isArray(item)) {
      console.log("here at an array...");
      return findsA(item);
    }
    if (item === "a") {
      return "found a";
    }
  }
  return "didn't find a";
};

console.log(findsA(nestedArray));
