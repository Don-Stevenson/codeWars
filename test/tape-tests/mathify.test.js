import test from "tape"

// Run: npm test
import { mathify } from "../../simpleCmdLineCalculator.js"

// addition 2 numbers
test("3 plus 1 = 4", t => {
  t.equal(
    mathify("3", "plus", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 plus 1 = 4\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 + 1 = 4", t => {
  t.equal(
    mathify("3", "+", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 + 1 = 4\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// addition 3 numbers
// test("3 plus 1 plus 1 = 5 ", t => {
//   t.equal(
//     mathify("3", "plus", "1", "plus", "1"),
//     "\nWelcome to the Simple Command Line Calculator!\n3 plus 1 plus 1 = 5 \nThanks for using the Simple Command Line Calculator!"
//   )
//   t.end()
// })

// test("3 + 1 + 1 = 4", t => {
//   t.equal(
//     mathify("3", "+", "1", "+", "1"),
//     "\nWelcome to the Simple Command Line Calculator!\n3 + 1 + 1 = 5 \nThanks for using the Simple Command Line Calculator!"
//   )
//   t.end()
// })
