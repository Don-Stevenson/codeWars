// place for Davey to learn Recursion
// **********************************

// make a function that finds a in a deeply nested array

const nestedArray = [[[[[[[[[[[[[[[[["a"]]]]]]]]]]]]]]]]];

const array = [1, 2, 3, "a", 5];

const findsA = (arr) => {
    for (const item of arr){
        if (arr.isArray(item)) console.log("here");
    }
};

findsA();
