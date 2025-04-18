/**
 * Finds elements in an array that have a specified length
 * @param {string[]} array - The input array to filter
 * @param {number} [targetLength=4] - The desired length of elements to find
 * @returns {string[]} Array containing elements with the specified length
 * @throws {TypeError} If input is not an array
 */
const findElementsByLength = (array, targetLength = 4) => {
  if (!Array.isArray(array)) {
    throw new TypeError("Input must be an array")
  }

  return array.filter(element => element.length === targetLength)
}

// Example usage
const friendsArray = ["Ryan", "Jimmy", "123", "4", "Cool Man"]
console.log(findElementsByLength(friendsArray)) // ['Ryan']
