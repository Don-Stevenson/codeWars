// given the 3 sides determine the type of triangle: scalene, equalateral, isoceles

// first takein the 3 side lengths, determin if it is a tringle at all

// if yes, then what type if a = b = c, eqaulateral, a= b or b = c or a = c, isocolese, if not but still a triangle
// return the type
// a2+ b2 = c2 for right angle
// To check if 3 sides make a triangle,
// you need to check that every side is less than or equal to the sum of the other two side

const whatKindOFTriangle = (a, b, c) => {
  if (a <= b + c && b <= a + c && c <= b + a) {
    return true;
  } else {
    return false;
  }
};

console.log(whatKindOFTriangle(4, 4, 12));
