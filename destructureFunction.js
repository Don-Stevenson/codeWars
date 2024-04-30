const foo = () => "foo"

console.log(foo())

const logsFoo = () => {
  const fooHere = foo()
  return fooHere
}

console.log(logsFoo())
