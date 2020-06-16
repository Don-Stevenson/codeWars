// given the 3 sides determine the type of triangle: scalene, equalateral, isoceles

// first takein the 3 side lengths, determin if it is a tringle at all

// if yes, then what type if a = b = c, eqaulateral, a= b or b = c or a = c, isocolese, if not but still a triangle
// return the type
// a2+ b2 = c2 for right angle
// To check if 3 sides make a triangle,
// you need to check that every side is less than or equal to the sum of the other two side

const isTriangle = (a, b, c) => {
  if (a <= b + c && b <= a + c && c <= b + a) {
    return true;
  } else {
    return false;
  }
};

const whatKindOFTriangle = (a, b, c, callback) => {
  if (callback(a, b, c)) {
    if (a === c && a === b && b === c) {
      return `${a}, ${b}, ${c} represent sides of an equilateral triangle.`;
    } else if (a === c || a === b || b === c) {
      return `${a}, ${b}, ${c} represent sides of an isosceles triangle.`;
    } else if (
      Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
      Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
      Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)
    ) {
      return `${a}, ${b}, ${c} represent sides of a right triangle.`;
    } else return `${a}, ${b}, ${c} represent sides of an scalene triangle.`;
  } else return `${a}, ${b}, ${c} do NOT represent sides of a triangle.`;
};

console.log(whatKindOFTriangle(4, 4, 4, isTriangle));
console.log(whatKindOFTriangle(4, 4, 3, isTriangle));
console.log(whatKindOFTriangle(4, 2, 6, isTriangle));
console.log(whatKindOFTriangle(4, 3, 5, isTriangle));
console.log(whatKindOFTriangle(18, 2, 7, isTriangle));
console.log(whatKindOFTriangle(3, 4, 5, isTriangle));
