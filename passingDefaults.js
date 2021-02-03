const doesFoo = (a = "foo") => {
    a = "junk"
  console.log(`${a} has been completed`);
};

doesFoo();
