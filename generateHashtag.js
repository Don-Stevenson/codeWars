// // function that takes in a str and returns a hashtag

// const generateHashtag = str => {
//   let newStrArr = str.split(" ")
//   let newArr = []
//   for (let word of newStrArr) {
//     newArr.push(word.charAt(0).toUpperCase() + word.slice(1))
//   }
//   return `#${newArr.join("")}`
// }

// with a map
const generateHashtag = str => {
  // Check for empty string or strings that would create hashtags longer than 140 characters
  if (!str || str.trim().length === 0) return false

  // Create the hashtag by capitalizing each word and joining them
  const hashtag =
    "#" +
    str
      .trim()
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("")

  // Check if the resulting hashtag is too long
  return hashtag.length > 140 ? false : hashtag
}

console.log(generateHashtag("  code   wars   "))
// expect #CodeWars

console.log(
  generateHashtag(
    "                                                real talk                                                                                                                                               "
  )
)
// Your hashtag > 140 charatcers, which is too long!

console.log(generateHashtag("hot blooded turkey roaster                 "))
// str.length >= 140

console.log(generateHashtag("")) // false
console.log(generateHashtag(" ".repeat(200))) // false
console.log(generateHashtag("hot blooded turkey roaster")) // #HotBloodedTurkeyRoaster
