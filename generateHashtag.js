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
  if (!str || str.length >= 140)
    return false, "Your hashtag > 140 charatcers, which is too long!"
  const newStrArr = str.trim().split(" ")
  let newArr = []
  newStrArr.map(element => {
    newArr.push(element.charAt(0).toUpperCase() + element.slice(1))
  })
  return `#${newArr.join("")}`
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
