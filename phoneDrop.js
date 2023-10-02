// Scenario
// This is a pretty common problem. You may have seen it before.

// You work for a mobile phone developer known for their robust design.
// The marketing division is working on a slogan for the latest model: "Able to survive a K-meter drop!".
// They just need to know the largest possible whole number value of K they can truthfully claim.
// Someone has already dropped one from 101 meters up and it broke,
// so they know the largest possible value is somewhere between 0 and 100 inclusive.

// Here's where you come in. You must find the value of K such that a phone will not break if dropped
// from K meters, but will break if dropped from K+1 meters. For the purpose of this challenge,
// these tests are completely reliable,
// so a single test at both K and K+1 meters is enough to establish this.
// Also, as long as a phone survives the drop, it suffers no damage whatsoever and can be reused
// in subsequent tests. Also, dropping a phone that's already broken gives you no information.

// Your boss gives you a prototype and tells you to go rent the 100-meter tower nearby and find K.
// The tower owner needs to know how long you'll be renting the tower for, and you rent by the minute,
// so assuming each trial takes the same amount of time, you need to know the maximum number
// of trials you'll need, without knowing the value of K.
// You realize you'll need to rent it long enough to conduct 100 trials, one for each floor.
// This is because you need to conduct one trial 1 meter up, then 2 meters up, and so on up to 100.
// If you skip any, then it's possible you won't know the exact value of K before the phone breaks.
// And then if K = 100, this strategy will require 100 trials.

// You tell your boss, who says it's too expensive to rent the tower for 100 tests.
// Your boss asks, what's the maximum number of trials you'll need if you have two phone prototypes?
// After some work, you find the answer is 14. Can you see how to find this number?
// there are many explanations online that can help, like this one.
// Feel free to read up on this problem if you don't understand the general approach.

// If you have three phones, you only need a maximum of 9 trials.

// Challenge
//
// Given N, the number of phone prototypes you have, and H, the maximum height that needs to be tested,
// determine the maximum number of trials required by an optimal strategy to determine K.

// phoneDrop(1, 100) // => 100
// phoneDrop(2, 100) // => 14
// phoneDrop(3, 100) // => 9
// phonedrop(1, 1) => 1
// phonedrop(2, 456) => 30
// phonedrop(3, 456) => 14
// phonedrop(4, 456) => 11
// phonedrop(2, 789) => 40
// phonedrop(3, 789) => 17
// phonedrop(4, 789) => 12
// You should be able to at least handle values of H up to 999.

// Optional bonus
// With an unlimited number of phones (N = infinity),
//  it takes a maximum of 27 trials to find K when H = 123456789.
//  Find the smallest N such that phonedrop(N, 123456789) = 27.

// initialize case history outside of the
// function so it doesn't reset to an empty array when called requirsively
const caseHistory = []

const phoneDropPuzzleWorstCase = (numOfPhones, numStories) => {
  // make case history an empty arrayt if it is nill
  if (!caseHistory[numOfPhones]) {
    caseHistory[numOfPhones] = []
  }

  // set case history for phones from the number of phones in the casehistory
  const caseHistoryForPhones = caseHistory[numOfPhones]

  // if caseHistory for stories exist this will be the number of trials required
  if (caseHistoryForPhones[numStories]) {
    return caseHistoryForPhones[numStories]
  }

  //Handle 1-story case explicitly
  if (numStories === 1) {
    caseHistoryForPhones[numStories] = 1
    return 1
  }

  //Handle 1-phone case explicitly
  if (numOfPhones === 1) {
    caseHistoryForPhones[numStories] = numStories
    return numStories
  }

  //Get the lowest worst case
  let lowestWorstCase = numStories

  // c style for loop that counts down from the number of stories
  for (let firstDrop = numStories; firstDrop > 0; firstDrop--) {
    //consider phone breaking
    let breakWorstCase =
      1 + phoneDropPuzzleWorstCase(numOfPhones - 1, firstDrop - 1)

    //consider phone not breaking
    let notBreakWorstCase =
      1 + phoneDropPuzzleWorstCase(numOfPhones, numStories - firstDrop)

    //get the worst case
    let worstCase =
      breakWorstCase > notBreakWorstCase ? breakWorstCase : notBreakWorstCase

    //update the lowest worst case
    if (worstCase < lowestWorstCase) {
      lowestWorstCase = worstCase
    }
  }

  caseHistoryForPhones[numStories] = lowestWorstCase
  return lowestWorstCase
}
// => 100
// phoneDropPuzzleWorstCase(2, 100) // => 14
// phoneDropPuzzleWorstCase(3, 100) // => 9
// phoneDropPuzzleWorstCase(1, 1) => 1
// phoneDropPuzzleWorstCase(2, 456) => 30
// phoneDropPuzzleWorstCase(3, 456) => 14
// phoneDropPuzzleWorstCase(4, 456) => 11
// phoneDropPuzzleWorstCase(2, 789) => 40
// phoneDropPuzzleWorstCase(3, 789) => 17
// phoneDropPuzzleWorstCase(4, 789) => 12

console.log(phoneDropPuzzleWorstCase(3, 100))
