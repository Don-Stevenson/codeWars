const multiply = (a, b) => {
//   const aNum = parseInt(a);
//   const bNum = parseInt(b);
  return (a * b).toLocaleString('fullwide', {useGrouping:false})
};

//expect 141993165043408650000000000000000000
console.log(multiply(21234565678686889979979, 66868881234489779975677));
