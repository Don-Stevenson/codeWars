import { phoneDropPuzzleWorstCase } from "./phoneDropRefactor.js"
const test = require("tape")

describe("phoneDropPuzzleWorstCase", () => {
  it("should return 1 when there is 1 phone and 1 story", () => {
    const result = phoneDropPuzzleWorstCase(1, 1)
    expect(result).toEqual(1)
  })

  it("should return the number of stories when there is 1 phone", () => {
    const result = phoneDropPuzzleWorstCase(1, 5)
    expect(result).toEqual(5)
  })

  it("should return the number of phones when there is 1 story", () => {
    const result = phoneDropPuzzleWorstCase(3, 1)
    expect(result).toEqual(3)
  })

  it("should return the correct worst case for 2 phones and 3 stories", () => {
    const result = phoneDropPuzzleWorstCase(2, 3)
    expect(result).toEqual(2)
  })

  it("should return the correct worst case for 3 phones and 5 stories", () => {
    const result = phoneDropPuzzleWorstCase(3, 5)
    expect(result).toEqual(3)
  })
})
