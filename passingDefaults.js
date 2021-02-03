// a function to try out passing default values into a function
// ************************************************************

const doesFoo = (a = "foo") => {
  // when a is foo
  console.log(`${a} has been completed`);
  
  // when a is updated to junk
  a = "junk";
  console.log(`Now ${a} has been completed`);
};

doesFoo();
