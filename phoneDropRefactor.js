import { caseHistory } from "./phoneDrop"

export const phoneDropPuzzleWorstCase = (numOfPhones, numStories) => {
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
    const breakWorstCase =
      1 + phoneDropPuzzleWorstCase(numOfPhones - 1, firstDrop - 1)

    //consider phone not breaking
    const notBreakWorstCase =
      1 + phoneDropPuzzleWorstCase(numOfPhones, numStories - firstDrop)

    //get the worst case
    const worstCase =
      breakWorstCase > notBreakWorstCase ? breakWorstCase : notBreakWorstCase

    //update the lowest worst case
    worstCase < lowestWorstCase
      ? (lowestWorstCase = worstCase)
      : lowestWorstCase
  }

  caseHistoryForPhones[numStories] = lowestWorstCase
  return lowestWorstCase
}
