module.exports = {
  addOne,
  addTwo,
  partialAdd,
  pipe,
};

// prev = 1, current = addOne
// prev = 2, current = addTwo
// prev = 4, current = addOne
// pipe:: fns... -> Number -> Number
function pipe(...fns) {
  return (initialValue) => fns.reduce(applyFn, initialValue);
}

function applyFn(value, fn) {
  return fn(value);
}

// partial application
// partialAdd:: Number -> Number -> Number
function partialAdd(adder) {
  return (num) => num + adder;
}

// addOne:: Number -> Number
function addOne(num) {
  return num + 1;
}

function addTwo(num) {
  return num + 2;
}
