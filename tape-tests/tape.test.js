import test from "tape"

const someAsyncThing = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 10)
  })
}

test("test using promises", async function (t) {
  const result = await someAsyncThing()
  t.ok(result)
})
