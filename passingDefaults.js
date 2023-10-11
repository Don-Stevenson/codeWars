// a function to try out passing default values into a function
// ************************************************************

const doesFooThenJunk = (a = "foo") => {
  // when a is foo
  console.log(`${a} has been completed`)

  // when a is updated to junk
  a = "junk"
  if (a === "junk") console.log(`Now ${a} has been completed`)
}

doesFooThenJunk()
// expect
// foo has been completed
// Now junk has been completed
