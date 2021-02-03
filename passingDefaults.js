// a function to try out passing default values into a function
// ************************************************************

const doesFoo = (a = "foo") => {
    console.log(`${a} has been completed`);
  a = "junk";
  console.log(`Now ${a} has been completed`);
};

doesFoo();
