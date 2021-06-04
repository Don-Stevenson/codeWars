const array = [1, 2, 3, 4, 5, 6, 7];

// for (const item of array) {
//   console.log("item is:", item);
// }

for (let i = 0; i < array.length; i++) {
  console.log(array[i] + array[i + 2]);
}
