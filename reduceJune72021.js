// trying out and learning about reduce

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addingFunction = (array) => {
  array.map((value) => {
    console.log({ value });
  });
};

addingFunction(numArray);
