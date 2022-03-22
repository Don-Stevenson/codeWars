const cstyleLoop = () => {
  for (let i = 0; i < 20; i++) {
    console.log(`this is ${i}`)
  }
}
// calls the above function but won't run because of the below problem
cstyleLoop()

// console will yell because you can't rename a varible
// after it's been named with const
// var cstyleLoop = () => {
//   console.log("this worked")
// }

// expect:

// /home/don/lighthouse/codeWars/letVsConst.js:11
// var cstyleLoop = () => {
//  ^
//
//  SyntaxError: Identifier 'cstyleLoop' has already been declared