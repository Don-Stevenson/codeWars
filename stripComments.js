//function that takes in a string and takes out an item
// that you enter in a addition to input
// ****************************************************

function solution(input, markers) {
  // splits the input arr in to each letter as an item
  let inputArr = input.split("");
  // designates the markers as what needs to be taken out 
  // (Note: all elements in markers will be deleted)
  let forDeletion = markers;
  // fiters out the input array, by only returning whats not for deleting,
  // and joins it back into a string
  return inputArr.filter(item => !forDeletion.includes(item)).join("");
}

console.log(solution("this is a show", "isahows"))
// returns t