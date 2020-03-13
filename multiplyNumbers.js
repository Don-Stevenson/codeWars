const multiply = (a, b) => {
  let num = a * b;
  const toFix = num => {
    let string = "";
    do {
      let a = num % 10;
      num = Math.trunc(num / 10);
      string = a + string;
    } while (num > 0);
    return string;
  };
  return toFix(num);
};

//expect 21879431595849229244644464444866428842804828260
console.log(multiply(21234565678686889979979, 103036868881234489779975677));
