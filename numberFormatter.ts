function formatNum(NumAmount: number): string {
  if (NumAmount < 1000) {
    return NumAmount.toLocaleString()
  } else if (NumAmount >= 1000 && NumAmount < 1000000) {
    return (NumAmount / 1000 + "k").toLocaleString()
  } else {
    return (NumAmount / 1000000 + "mil").toLocaleString()
  }
}

console.log(formatNum(100)) // 100
console.log(formatNum(1000)) // 1k
console.log(formatNum(100000)) // 100k
console.log(formatNum(1000000)) // 1mil
console.log(formatNum(10000000)) // 10mil
c
