// trying destructuring objects into variables inside arrays and objects
//

const object = {
  a: 12,
  b: 34,
  c: () => console.log("hi there"),
};

const  {c, a} =  object ;

console.log(a, c());
// expect hi there
// 12 undefined