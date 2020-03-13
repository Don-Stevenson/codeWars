// const multiply = (a, b) => {
//   let num = a * b;
//   const toFix = num => {
//     let string = "";
//     do {
//       let a = num % 10;
//       num = Math.trunc(num / 10);
//       string = a + string;
//     } while (num > 0);
//     return string;
//   };
//   return toFix(num);
// };

// trying with return strings to an array
function multiply(a, b) {
  const product = Array(a.length + b.length).fill(0);
  for (let i = a.length; i--; null) {
    let carry = 0;
    for (let j = b.length; j--; null) {
      product[1 + i + j] += carry + a[i] * b[j];
      carry = Math.floor(product[1 + j + i] / 10);
      product[1 + i + j] = product[1 + i + j] % 10;
    }
    product[i] += carry;
  }
  return product.join("").replace(/^0*(\d)/, "$1");
}

//expect 21879431595849229244644464444866428842804828260
console.log(multiply("34", "566"));
