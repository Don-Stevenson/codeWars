// trying destructuring objects into variables inside arrays and objects
//

const object = {
  a: 12,
  b: 34,
  c: () => console.log("hi there"),
};

const  {a, c} =  object ;

const  {foo, barr} =  object ;

console.log(a, c());
// expect: hi there
// 12 undefined

console.log(foo, barr);
// expect: undefined undefined