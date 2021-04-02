// a named function
function doesFoo() {
  console.log("foo");
}

doesFoo();
// expect foo


// anonmyous function stored in a variable called didFoo
const didFoo = function () {
  console.log("did foo");
};

didFoo();
// expect did foo


// anonymous arrow function stored in a variable called jim
const jim = () => {
  console.log("I'm jim");
};

jim();
// expect I'm jim
