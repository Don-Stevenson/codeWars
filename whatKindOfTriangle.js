// triangles
// *********
// given the 3 sides determine the type of triangle: scalene, equalateral, isoceles
// first takein the 3 side lengths, determin if it is a tringle at all
// if yes, then what type if a = b = c, eqauilateral, a= b or b = c or a = c, isosceles, if not but still a triangle
// return the type
// a2+ b2 = c2 for right angle
// To check if 3 sides make a triangle,
// you need to check that every side is less than or equal to the sum of the other two side

const isTriangle = (a, b, c) => a <= b + c && b <= a + c && c <= b + a

const whatKindOFTriangle = (a, b, c, callback) => {
  if (callback(a, b, c)) {
    if (a * b * c === Math.pow(a, 3)) {
      return `${a}, ${b}, ${c} represents the sides of an equilateral triangle.`
    } else if (a === c || a === b || b === c) {
      return `${a}, ${b}, ${c} represents the sides of an isosceles triangle.`
    } else if (
      Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
      Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
      Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)
    ) {
      return `${a}, ${b}, ${c} represents the sides of a right triangle.`
    } else
      return `${a}, ${b}, ${c} represents the sides of an scalene triangle.`
  } else return `${a}, ${b}, ${c} do NOT represents the sides of a triangle.`
}

// expected results:
// ****************

// console.log(whatKindOFTriangle(7, 7, 7, isTriangle));
// 7, 7, 7 represents the sides of an equilateral triangle.

// console.log(whatKindOFTriangle(4, 4, 3, isTriangle));
// 4, 4, 3 represents the sides of an isosceles triangle.

// console.log(whatKindOFTriangle(4, 3, 4, isTriangle))
// 4, 3, 4 represents the sides of an isosceles triangle.

// console.log(whatKindOFTriangle(3, 4, 4, isTriangle))
// 3, 4, 4 represents the sides of an isosceles triangle.

// console.log(whatKindOFTriangle(4, 2, 6, isTriangle))
// 4, 2, 6 represents the sides of an scalene triangle.

// console.log(whatKindOFTriangle(4, 3, 5, isTriangle))
// 4, 3, 5 represents the sides of a right triangle.

// console.log(whatKindOFTriangle(18, 2, 7, isTriangle))
// 18, 2, 7 do NOT represents the sides of a triangle.

console.log(whatKindOFTriangle(3, 4, 5, isTriangle))
// 3, 4, 5 represents the sides of a right triangle.
