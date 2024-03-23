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

// minus 2 numbers
test("3 minus 1 = 2", t => {
  t.equal(
    mathify("3", "minus", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 minus 1 = 2\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 - 1 = 4", t => {
  t.equal(
    mathify("3", "-", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 - 1 = 2\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// multiply 2 numbers
test("3 multiply 2 = 6", t => {
  t.equal(
    mathify("3", "multiply", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 multiply 2 = 6\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test(`3 * 2 = 6`, t => {
  t.equal(
    mathify("3", "*", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 * 2 = 6\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// divide 2 numbers
test("6 divided by 2 = 3", t => {
  t.equal(
    mathify("6", "divide", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n6 divide 2 = 3\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("6 / 2 = 3", t => {
  t.equal(
    mathify("6", "/", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n6 / 2 = 3\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// root
test("4 root = 2", t => {
  t.equal(
    mathify("4", "root"),
    "\nWelcome to the Simple Command Line Calculator!\nThe root of 4 = 2\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// power of
test("4 power of 2 = 16", t => {
  t.equal(
    mathify("4", "power", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n4 power of 2 = 16\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("4 ^ of 2 = 16", t => {
  t.equal(
    mathify("4", "^", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n4 ^ of 2 = 16\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// addition 3 numbers
test("3 plus 1 plus 1 = 5 ", t => {
  t.equal(
    mathify("3", "plus", "1", "plus", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 plus 1 plus 1 = 5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 + 1 + 1 = 5", t => {
  t.equal(
    mathify("3", "+", "1", "+", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 + 1 + 1 = 5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 plus 1 + 1 = 5", t => {
  t.equal(
    mathify("3", "plus", "1", "+", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 plus 1 + 1 = 5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 + 1 plus 1 = 5", t => {
  t.equal(
    mathify("3", "+", "1", "plus", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 + 1 plus 1 = 5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// minus 3 numbers
test("3 minus 1 munus 1 = ", t => {
  t.equal(
    mathify("3", "minus", "1", "minus", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 minus 1 minus 1 = 1 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 - 1 - 1 = 1", t => {
  t.equal(
    mathify("3", "-", "1", "-", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 - 1 - 1 = 1 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 minus 1 - 1 = 1", t => {
  t.equal(
    mathify("3", "minus", "1", "-", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 minus 1 - 1 = 1 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 - 1 minus 1 = 1", t => {
  t.equal(
    mathify("3", "-", "1", "minus", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 - 1 minus 1 = 1 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// multiply 3 numbers
test("3 multiply 1 multiply 1 = ", t => {
  t.equal(
    mathify("3", "multiply", "1", "multiply", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 multiply 1 multiply 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 * 1 * 1 = 1", t => {
  t.equal(
    mathify("3", "*", "1", "*", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 * 1 * 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 multiply 1 * 1 = 1", t => {
  t.equal(
    mathify("3", "multiply", "1", "*", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 multiply 1 * 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 * 1 multiply 1 = 1", t => {
  t.equal(
    mathify("3", "*", "1", "multiply", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 * 1 multiply 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// divide 3 numbers
test("3 divide 1 divide 1 = ", t => {
  t.equal(
    mathify("3", "divide", "1", "divide", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 divide 1 divide 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 / 1 / 1 = 1", t => {
  t.equal(
    mathify("3", "/", "1", "/", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 / 1 / 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("21 divide 3 / 1 = 1", t => {
  t.equal(
    mathify("21", "divide", "3", "/", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n21 divide 3 / 2 = 3.5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 / 1 divide 1 = 1", t => {
  t.equal(
    mathify("3", "/", "1", "divide", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 / 1 divide 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// 3 nums multply then divide

test("3 multiply 1 divide 1 = 1", t => {
  t.equal(
    mathify("3", "multiply", "1", "divide", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 multiply 1 divide 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 * 1 divide 1 = 1", t => {
  t.equal(
    mathify("3", "*", "1", "divide", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 * 1 divide 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 multiply 12 / 2  = 1", t => {
  t.equal(
    mathify("3", "multiply", "12", "/", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 multiply 12 / 2 = 18 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 * 12 / 2 = 1", t => {
  t.equal(
    mathify("3", "*", "12", "/", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 * 12 / 2 = 18 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 divide 1 multiply 1 = 1", t => {
  t.equal(
    mathify("3", "divide", "1", "multiply", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 divide 1 multiply 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 divide 1 * 1 = 1", t => {
  t.equal(
    mathify("3", "divide", "1", "*", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 divide 1 * 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 / 1 mulitply 1 = 1", t => {
  t.equal(
    mathify("3", "/", "1", "multiply", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 / 1 multiply 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 / 1 * 1 = 1", t => {
  t.equal(
    mathify("3", "/", "1", "*", "1"),
    "\nWelcome to the Simple Command Line Calculator!\n3 / 1 * 1 = 3 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// 3 nums add then mulitply
test("3 plus 2 multiply 2 = 7", t => {
  t.equal(
    mathify("3", "plus", "2", "multiply", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 plus 2 multiply 2 = 7 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 + 2 multiply 2 = 7", t => {
  t.equal(
    mathify("3", "+", "2", "multiply", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 + 2 multiply 2 = 7 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 plus 2 * 2 = 7", t => {
  t.equal(
    mathify("3", "plus", "2", "*", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 plus 2 * 2 = 7 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 + 2 * 2 = 7", t => {
  t.equal(
    mathify("3", "+", "2", "*", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 + 2 * 2 = 7 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// 3 nums subtract then mulitply
test("3 - 2 multiply 2 = -1", t => {
  t.equal(
    mathify("3", "-", "2", "multiply", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 - 2 multiply 2 = -1 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 - 2 multiply 2 = -1", t => {
  t.equal(
    mathify("3", "-", "2", "multiply", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 - 2 multiply 2 = -1 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 minus 2 * 2 = -1", t => {
  t.equal(
    mathify("3", "minus", "2", "*", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 minus 2 * 2 = -1 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 - 2 * 2 = -1", t => {
  t.equal(
    mathify("3", "-", "2", "*", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 - 2 * 2 = -1 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// 3 nums divide then mulitply
test("3 divide 2 multiply 3 = 4.5", t => {
  t.equal(
    mathify("3", "divide", "2", "multiply", "3"),
    "\nWelcome to the Simple Command Line Calculator!\n3 divide 2 multiply 3 = 4.5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 / 2 multiply 2 = 4.5", t => {
  t.equal(
    mathify("3", "/", "2", "multiply", "3"),
    "\nWelcome to the Simple Command Line Calculator!\n3 / 2 multiply 3 = 4.5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 / 2 * 2 = 4.5", t => {
  t.equal(
    mathify("3", "divide", "2", "*", "3"),
    "\nWelcome to the Simple Command Line Calculator!\n3 divide 2 * 3 = 4.5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 / 2 * 2 = 4.5", t => {
  t.equal(
    mathify("3", "/", "2", "*", "3"),
    "\nWelcome to the Simple Command Line Calculator!\n3 / 2 * 3 = 4.5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// Error states
test("Pass empty 5 strings returns error", t => {
  t.equal(
    mathify("", "", "", "", ""),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Pass empty 4 strings returns error", t => {
  t.equal(
    mathify("", "", "", ""),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Pass empty 3 strings returns error", t => {
  t.equal(
    mathify("", "", "", ""),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Pass empty 2 strings returns error", t => {
  t.equal(
    mathify("", ""),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Pass empty 1 strings returns error", t => {
  t.equal(
    mathify(""),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("3 power 2 * 2 returns error,", t => {
  t.equal(
    mathify("3", "power", "2", "*", "3"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nCannot pass power or root as one of the 2 operations"
  )
  t.end()
})

test("3 ^ 2 * 2 returns error", t => {
  t.equal(
    mathify("3", "^", "2", "*", "3"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nCannot pass power or root as one of the 2 operations"
  )
  t.end()
})

test("3 root 2 * 2 returns error", t => {
  t.equal(
    mathify("3", "root", "2", "*", "3"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nCannot pass power or root as one of the 2 operations"
  )
  t.end()
})
