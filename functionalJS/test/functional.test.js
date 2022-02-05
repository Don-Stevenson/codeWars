const test = require("tape")
var tapSpec = require('tap-spec')
const { partialAdd, pipe } = require("../functional")
// test('sample test', t => {
//   const actual = true
//   const expected = false
//   t.deepEqual(actual, expected)
//   t.end()
// })

test("addOne() should add one when any number is passed", (t) => {
  const input = [
    {
      num: 0,
      expected: 1,
    },
    {
      num: 1,
      expected: 2,
    },
    {
      num: 11,
      expected: 12,
    },
    {
      num: 5,
      expected: 6,
    },
  ]
  const addOne = partialAdd(1)
  input.forEach(({ num, expected }) => {
    const actual = addOne(num)
    t.deepEqual(actual, expected)
  })
  t.end()
})

test("addTwo() should add two when any number is passed", (t) => {
  const input = [
    {
      num: 0,
      expected: 2,
    },
    {
      num: 1,
      expected: 3,
    },
    {
      num: 11,
      expected: 13,
    },
    {
      num: 5,
      expected: 7,
    },
  ]
  const addTwo = partialAdd(2)
  input.forEach(({ num, expected }) => {
    const actual = addTwo(num)
    t.deepEqual(actual, expected)
  })
  t.end()
})

test("pipe() should compose functions in sequential order", (t) => {
  const addOne = partialAdd(1)
  const addTwo = partialAdd(2)
  const actual = pipe(addOne, addTwo, addOne)(1)
  const expected = 5
  t.deepEqual(actual, expected)
  t.end()
})
