// function that takes in a string and takes out an item
// that you enter in a addition to input
// ****************************************************

const removeMarkers = (input, markersForDeletion) =>
  // splits the input arr in to each letter as an item
  // fiters out the input array, by only returning whats not for deleting,
  // and joins it back into a string
  input
    .split("")
    .filter(item => !markersForDeletion.includes(item))
    .join("")

console.log(removeMarkers("this is a show", "isahows"))
// returns t
