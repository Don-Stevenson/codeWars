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

test("17 root = 4.123105625617661", t => {
  t.equal(
    mathify("17", "root"),
    "\nWelcome to the Simple Command Line Calculator!\nThe root of 17 = 4.123105625617661\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("85 root = 9.219544457292887", t => {
  t.equal(
    mathify("85", "root"),
    "\nWelcome to the Simple Command Line Calculator!\nThe root of 85 = 9.219544457292887\nThanks for using the Simple Command Line Calculator!"
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

test("8.75 ^ of 5 = 16", t => {
  t.equal(
    mathify("8.75", "^", "5"),
    "\nWelcome to the Simple Command Line Calculator!\n8.75 ^ of 5 = 51290.8935546875\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("-8 ^ of 5 = 16", t => {
  t.equal(
    mathify("-8", "^", "5"),
    "\nWelcome to the Simple Command Line Calculator!\n-8 ^ of 5 = -32768\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("8 ^ of -5 = 16", t => {
  t.equal(
    mathify("8", "^", "-5"),
    "\nWelcome to the Simple Command Line Calculator!\n8 ^ of -5 = 0.000030517578125\nThanks for using the Simple Command Line Calculator!"
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

// 3 nums: multply then divide

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

test("3 / 1 multiply 1 = 1", t => {
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

// 3 nums: add then multiply
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

// 3 nums: add then divide
test("3 plus 2 divide 2 = 4", t => {
  t.equal(
    mathify("3", "plus", "2", "divide", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 plus 2 divide 2 = 4 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 + 2 divide 2 = 4", t => {
  t.equal(
    mathify("3", "+", "2", "divide", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 + 2 divide 2 = 4 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 plus 2 / 2 = 4", t => {
  t.equal(
    mathify("3", "plus", "2", "/", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 plus 2 / 2 = 4 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 + 2 / 2 = 4", t => {
  t.equal(
    mathify("3", "+", "2", "/", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 + 2 / 2 = 4 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// 3 nums: subtract then multiply
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

// 3 nums: subtract then divide
test("3 - 2 divide 2 = 2", t => {
  t.equal(
    mathify("3", "-", "2", "divide", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 - 2 divide 2 = 2 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 - 2 divide 2 = 2", t => {
  t.equal(
    mathify("3", "-", "2", "divide", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 - 2 divide 2 = 2 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 minus 2 / 2 = 2", t => {
  t.equal(
    mathify("3", "minus", "2", "/", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 minus 2 / 2 = 2 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 - 2 / 2 = 2", t => {
  t.equal(
    mathify("3", "-", "2", "/", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 - 2 / 2 = 2 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// 3 nums: divide then multiply
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

// 2 nums: root then ...
test("3 root 2 multiply", t => {
  t.equal(
    mathify("3", "root", "2", "multiply"),
    "\nWelcome to the Simple Command Line Calculator!\nroot of 3 multiply 2 = 3.4641016151377544\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 root 2 *", t => {
  t.equal(
    mathify("3", "root", "2", "*"),
    "\nWelcome to the Simple Command Line Calculator!\nroot of 3 * 2 = 3.4641016151377544\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 root 2 plus", t => {
  t.equal(
    mathify("3", "root", "2", "plus"),
    "\nWelcome to the Simple Command Line Calculator!\nroot of 3 plus 2 = 3.732050807568877\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 root 2 minus", t => {
  t.equal(
    mathify("3", "root", "2", "minus"),
    "\nWelcome to the Simple Command Line Calculator!\nroot of 3 minus 2 = -0.2679491924311228\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 root 2 -", t => {
  t.equal(
    mathify("3", "root", "2", "-"),
    "\nWelcome to the Simple Command Line Calculator!\nroot of 3 - 2 = -0.2679491924311228\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 root 2 -", t => {
  t.equal(
    mathify("9", "root", "3", "-"),
    "\nWelcome to the Simple Command Line Calculator!\nroot of 9 - 3 = 0\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 root 2 divide", t => {
  t.equal(
    mathify("3", "root", "2", "divide"),
    "\nWelcome to the Simple Command Line Calculator!\nroot of 3 divide 2 = 0.8660254037844386\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 root 2 /", t => {
  t.equal(
    mathify("3", "root", "2", "/"),
    "\nWelcome to the Simple Command Line Calculator!\nroot of 3 / 2 = 0.8660254037844386\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("9 root 2 /", t => {
  t.equal(
    mathify("9", "root", "2", "/"),
    "\nWelcome to the Simple Command Line Calculator!\nroot of 9 / 2 = 1.5\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 root 2 +", t => {
  t.equal(
    mathify("3", "root", "2", "+"),
    "\nWelcome to the Simple Command Line Calculator!\nroot of 3 + 2 = 3.732050807568877\nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// 2 nums: power of then ...
test("3 power 2 multiply 2", t => {
  t.equal(
    mathify("3", "power", "2", "multiply", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 power 2 multiply 2 = 18 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 ^ 2 * 2", t => {
  t.equal(
    mathify("3", "^", "2", "*", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 ^ 2 * 2 = 18 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 power 2 * 2 = 27", t => {
  t.equal(
    mathify("3", "power", "2", "*", "3"),
    "\nWelcome to the Simple Command Line Calculator!\n3 power 2 * 3 = 27 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 ^ 2 * 2 = 27", t => {
  t.equal(
    mathify("3", "^", "2", "*", "3"),
    "\nWelcome to the Simple Command Line Calculator!\n3 ^ 2 * 3 = 27 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 power 2 plus 2", t => {
  t.equal(
    mathify("3", "power", "2", "plus", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 power 2 plus 2 = 11 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 ^ 2 + 2", t => {
  t.equal(
    mathify("3", "^", "2", "+", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 ^ 2 + 2 = 11 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 power 2 minus 2", t => {
  t.equal(
    mathify("3", "power", "2", "minus", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 power 2 minus 2 = 7 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 ^ 2 - 2", t => {
  t.equal(
    mathify("3", "^", "2", "-", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 ^ 2 - 2 = 7 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 power 12 minus 2", t => {
  t.equal(
    mathify("3", "power", "12", "minus", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 power 12 minus 2 = 531439 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 ^ 12 - 2", t => {
  t.equal(
    mathify("3", "^", "12", "-", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 ^ 12 - 2 = 531439 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 power 2 divide 2", t => {
  t.equal(
    mathify("3", "power", "2", "divide", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 power 2 divide 2 = 4.5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("3 ^ 2 / 2", t => {
  t.equal(
    mathify("3", "^", "2", "/", "2"),
    "\nWelcome to the Simple Command Line Calculator!\n3 ^ 2 / 2 = 4.5 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("12 power 5 divide 4", t => {
  t.equal(
    mathify("12", "power", "5", "divide", "4"),
    "\nWelcome to the Simple Command Line Calculator!\n12 power 5 divide 4 = 62208 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("12 ^ 5 / 4", t => {
  t.equal(
    mathify("12", "^", "5", "/", "4"),
    "\nWelcome to the Simple Command Line Calculator!\n12 ^ 5 / 4 = 62208 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("122 power 5 divide 4", t => {
  t.equal(
    mathify("122", "power", "5", "divide", "4"),
    "\nWelcome to the Simple Command Line Calculator!\n122 power 5 divide 4 = 6756770408 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

test("122 ^ 5 / 4", t => {
  t.equal(
    mathify("122", "^", "5", "/", "4"),
    "\nWelcome to the Simple Command Line Calculator!\n122 ^ 5 / 4 = 6756770408 \nThanks for using the Simple Command Line Calculator!"
  )
  t.end()
})

// Error states
test("Passing an empty 5 strings returns error", t => {
  t.equal(
    mathify("", "", "", "", ""),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing an empty 4 strings returns error", t => {
  t.equal(
    mathify("", "", "", ""),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing 3 empty strings returns error", t => {
  t.equal(
    mathify("", "", "", ""),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing 2 empty strings returns error", t => {
  t.equal(
    mathify("", ""),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing one empty 1 string returns error", t => {
  t.equal(
    mathify(""),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing * Nan NaN Nan NaN returns error", t => {
  t.equal(
    mathify("*", NaN, NaN, NaN, NaN),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing * * NaN Nan NaN returns error", t => {
  t.equal(
    mathify("*", "*", NaN, NaN, NaN),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing * * * Nan NaN returns error", t => {
  t.equal(
    mathify("*", "*", "*", NaN, NaN),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing * * * * NaN returns error", t => {
  t.equal(
    mathify("*", "*", "*", "*", NaN),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing * * * * * returns error", t => {
  t.equal(
    mathify("*", "*", "*", "*", "*"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing NaN * Nan returns error", t => {
  t.equal(
    mathify(NaN, "*", NaN),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing NaN * Nan * NaN returns error", t => {
  t.equal(
    mathify(NaN, "*", NaN, "*", NaN),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing NaN NaN Nan NaN NaN returns error", t => {
  t.equal(
    mathify(NaN, NaN, NaN, NaN, NaN),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing an NaN returns error", t => {
  t.equal(
    mathify(NaN),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("3 root 2 * 2 returns error", t => {
  t.equal(
    mathify("3", "root", "2", "*", "3"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou cannot pass 3 numbers when one operation is root"
  )
  t.end()
})

test("-85 root = Error!", t => {
  t.equal(
    mathify("-85", "root"),
    "\nWelcome to the Simple Command Line Calculator!\nError!\nFor root, you must not pass a negative number"
  )
  t.end()
})

test("21 multiply -85 root = Error!", t => {
  t.equal(
    mathify("21", "multiply", "-85", "root"),
    "\nWelcome to the Simple Command Line Calculator!\nError!\nFor root, you must not pass a negative number"
  )
  t.end()
})

test("21 * -85 root = Error!", t => {
  t.equal(
    mathify("21", "*", "-85", "root"),
    "\nWelcome to the Simple Command Line Calculator!\nError!\nFor root, you must not pass a negative number"
  )
  t.end()
})

test("21 plus -85 root = Error!", t => {
  t.equal(
    mathify("21", "plus", "-85", "root"),
    "\nWelcome to the Simple Command Line Calculator!\nError!\nFor root, you must not pass a negative number"
  )
  t.end()
})

test("21 minus -85 root = Error!", t => {
  t.equal(
    mathify("21", "minus", "-85", "root"),
    "\nWelcome to the Simple Command Line Calculator!\nError!\nFor root, you must not pass a negative number"
  )
  t.end()
})

test("21 - -85 root = Error!", t => {
  t.equal(
    mathify("21", "minus", "-85", "root"),
    "\nWelcome to the Simple Command Line Calculator!\nError!\nFor root, you must not pass a negative number"
  )
  t.end()
})

test("3 multiply '' returns error", t => {
  t.equal(
    mathify("3", "multiply"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nFor multiply you must pass 2 valid numbers. 3 multiply ___?"
  )
  t.end()
})

test("3 * '' returns error", t => {
  t.equal(
    mathify("3", "*"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nFor * you must pass 2 valid numbers. 3 * ___?"
  )
  t.end()
})

test("3 plus '' returns error", t => {
  t.equal(
    mathify("3", "plus"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nFor plus you must pass 2 valid numbers. 3 plus ___?"
  )
  t.end()
})

test("3 + '' returns error", t => {
  t.equal(
    mathify("3", "+"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nFor + you must pass 2 valid numbers. 3 + ___?"
  )
  t.end()
})

test("3 minus '' returns error", t => {
  t.equal(
    mathify("3", "minus"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nFor minus you must pass 2 valid numbers. 3 minus ___?"
  )
  t.end()
})

test("3 - '' returns error", t => {
  t.equal(
    mathify("3", "-"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nFor - you must pass 2 valid numbers. 3 - ___?"
  )
  t.end()
})

test("3 divide '' returns error", t => {
  t.equal(
    mathify("3", "divide"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nFor divide you must pass 2 valid numbers. 3 divide ___?"
  )
  t.end()
})

test("3 / '' returns error", t => {
  t.equal(
    mathify("3", "/"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nFor / you must pass 2 valid numbers. 3 / ___?"
  )
  t.end()
})

test("Passing in nothing returns error", t => {
  t.equal(
    mathify(),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})

test("Passing in + returns error", t => {
  t.equal(
    mathify("+"),
    "\nWelcome to the Simple Command Line Calculator!\nError! \nYou can pass up to 3 numbers and 2 operations \nnumber operation number operation number"
  )
  t.end()
})
