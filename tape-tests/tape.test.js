const test = require("tape")
// const { parseLabel, lines } = require("../regexTestParsing.js")

// console.log({ lines })
const someAsyncThing = () => "foo"

test("test using promises", async function (t) {
  const result = await someAsyncThing()
  t.ok(result)
})
