import test from "tape"

// Run: npm test tape-tests/reverseString2.test.js
import {
  reverseString,
  reverseString2,
  reverseString3,
  reverseString4,
  reverseString5,
  reverseString6,
  reverseString7,
  reverseString8,
  reverseString9,
  reverseString10,
  reverseString11,
} from "../reverseString2.js"

test("Reverse a string with spaces", t => {
  t.equal(reverseString("tame children"), "nerdlihc emat")
  t.equal(reverseString2("tame children"), "nerdlihc emat")
  t.equal(reverseString3("tame children"), "nerdlihc emat")
  t.equal(reverseString4("tame children"), "nerdlihc emat")
  t.equal(reverseString5("tame children"), "nerdlihc emat")
  t.equal(reverseString6("tame children"), "nerdlihc emat")
  t.equal(reverseString7("tame children"), "nerdlihc emat")
  t.equal(reverseString8("tame children"), "nerdlihc emat")
  t.equal(reverseString9("tame children"), "nerdlihc emat")
  t.equal(reverseString10("tame children"), "nerdlihc emat")
  t.equal(reverseString11("tame children"), "nerdlihc emat")
  t.end()
})

test("Reverse a palindrome", t => {
  t.equal(reverseString("racecar"), "racecar")
  t.equal(reverseString2("racecar"), "racecar")
  t.equal(reverseString3("racecar"), "racecar")
  t.equal(reverseString4("racecar"), "racecar")
  t.equal(reverseString5("racecar"), "racecar")
  t.equal(reverseString6("racecar"), "racecar")
  t.equal(reverseString7("racecar"), "racecar")
  t.equal(reverseString8("racecar"), "racecar")
  t.equal(reverseString9("racecar"), "racecar")
  t.equal(reverseString10("racecar"), "racecar")
  t.equal(reverseString11("racecar"), "racecar")
  t.end()
})

test("Reverse a string with unique characters", t => {
  t.equal(reverseString("dumbo"), "obmud")
  t.equal(reverseString2("dumbo"), "obmud")
  t.equal(reverseString3("dumbo"), "obmud")
  t.equal(reverseString4("dumbo"), "obmud")
  t.equal(reverseString5("dumbo"), "obmud")
  t.equal(reverseString6("dumbo"), "obmud")
  t.equal(reverseString7("dumbo"), "obmud")
  t.equal(reverseString8("dumbo"), "obmud")
  t.equal(reverseString9("dumbo"), "obmud")
  t.equal(reverseString10("dumbo"), "obmud")
  t.equal(reverseString11("dumbo"), "obmud")
  t.end()
})

test("Reverse a string with uppercase letters", t => {
  t.equal(reverseString("Plum"), "mulP")
  t.equal(reverseString2("Plum"), "mulP")
  t.equal(reverseString3("Plum"), "mulP")
  t.equal(reverseString4("Plum"), "mulP")
  t.equal(reverseString5("Plum"), "mulP")
  t.equal(reverseString6("Plum"), "mulP")
  t.equal(reverseString7("Plum"), "mulP")
  t.equal(reverseString8("Plum"), "mulP")
  t.equal(reverseString9("Plum"), "mulP")
  t.equal(reverseString10("Plum"), "mulP")
  t.equal(reverseString11("Plum"), "mulP")
  t.end()
})

test("Reverse a string with alternating characters", t => {
  t.equal(reverseString("plumulp"), "plumulp")
  t.equal(reverseString2("plumulp"), "plumulp")
  t.equal(reverseString3("plumulp"), "plumulp")
  t.equal(reverseString4("plumulp"), "plumulp")
  t.equal(reverseString5("plumulp"), "plumulp")
  t.equal(reverseString6("plumulp"), "plumulp")
  t.equal(reverseString7("plumulp"), "plumulp")
  t.equal(reverseString8("plumulp"), "plumulp")
  t.equal(reverseString9("plumulp"), "plumulp")
  t.equal(reverseString10("plumulp"), "plumulp")
  t.equal(reverseString11("plumulp"), "plumulp")
  t.end()
})

test("Reverse a string with repeated characters", t => {
  t.equal(reverseString("pumpkin"), "nikpmup")
  t.equal(reverseString2("pumpkin"), "nikpmup")
  t.equal(reverseString3("pumpkin"), "nikpmup")
  t.equal(reverseString4("pumpkin"), "nikpmup")
  t.equal(reverseString5("pumpkin"), "nikpmup")
  t.equal(reverseString6("pumpkin"), "nikpmup")
  t.equal(reverseString7("pumpkin"), "nikpmup")
  t.equal(reverseString8("pumpkin"), "nikpmup")
  t.equal(reverseString9("pumpkin"), "nikpmup")
  t.equal(reverseString10("pumpkin"), "nikpmup")
  t.equal(reverseString11("pumpkin"), "nikpmup")
  t.end()
})

test("Reverse a string with a palindrome phrase", t => {
  t.equal(reverseString("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.equal(reverseString2("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.equal(reverseString3("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.equal(reverseString4("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.equal(reverseString5("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.equal(reverseString6("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.equal(reverseString7("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.equal(reverseString8("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.equal(reverseString9("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.equal(reverseString10("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.equal(reverseString11("amanaplanacanalpanama"), "amanaplanacanalpanama")
  t.end()
})

test("Reverse a string with a palindrome word", t => {
  t.equal(reverseString("tacocat"), "tacocat")
  t.equal(reverseString2("tacocat"), "tacocat")
  t.equal(reverseString3("tacocat"), "tacocat")
  t.equal(reverseString4("tacocat"), "tacocat")
  t.equal(reverseString5("tacocat"), "tacocat")
  t.equal(reverseString6("tacocat"), "tacocat")
  t.equal(reverseString7("tacocat"), "tacocat")
  t.equal(reverseString8("tacocat"), "tacocat")
  t.equal(reverseString9("tacocat"), "tacocat")
  t.equal(reverseString10("tacocat"), "tacocat")
  t.equal(reverseString11("tacocat"), "tacocat")
  t.end()
})

test("Reverse a string with a non-palindrome word", t => {
  t.notEqual(reverseString("tenent"), "tenent")
  t.notEqual(reverseString2("tenent"), "tenent")
  t.notEqual(reverseString3("tenent"), "tenent")
  t.notEqual(reverseString4("tenent"), "tenent")
  t.notEqual(reverseString5("tenent"), "tenent")
  t.notEqual(reverseString6("tenent"), "tenent")
  t.notEqual(reverseString7("tenent"), "tenent")
  t.notEqual(reverseString8("tenent"), "tenent")
  t.notEqual(reverseString9("tenent"), "tenent")
  t.notEqual(reverseString10("tenent"), "tenent")
  t.notEqual(reverseString11("tenent"), "tenent")
  t.end()
})

test("Reverse a string with a non-palindrome phrase", t => {
  t.notEqual(reverseString("let sleeping dogs lie"), "let sleeping dogs lie")
  t.notEqual(reverseString2("let sleeping dogs lie"), "let sleeping dogs lie")
  t.notEqual(reverseString3("let sleeping dogs lie"), "let sleeping dogs lie")
  t.notEqual(reverseString4("let sleeping dogs lie"), "let sleeping dogs lie")
  t.notEqual(reverseString5("let sleeping dogs lie"), "let sleeping dogs lie")
  t.notEqual(reverseString6("let sleeping dogs lie"), "let sleeping dogs lie")
  t.notEqual(reverseString7("let sleeping dogs lie"), "let sleeping dogs lie")
  t.notEqual(reverseString8("let sleeping dogs lie"), "let sleeping dogs lie")
  t.notEqual(reverseString9("let sleeping dogs lie"), "let sleeping dogs lie")
  t.notEqual(reverseString10("let sleeping dogs lie"), "let sleeping dogs lie")
  t.notEqual(reverseString11("let sleeping dogs lie"), "let sleeping dogs lie")
  t.end()
})
