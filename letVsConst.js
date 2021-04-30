const cstyleLoop = () => {
  for (let i = 0; i < 20; i++) {
    console.log(`this is ${i}`);
  }
};
// will run
cstyleLoop();

// console will yell because you can't rename a varible
//  after it's been named with const
var cstyleLoop = () => {
  console.log("hello");
};


