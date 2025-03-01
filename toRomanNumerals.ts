type RomanSymbol = [symbol: string, value: number]

const ROMAN_NUMERALS: RomanSymbol[] = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
]

export const toRoman = (num: number): string => {
  let remaining = num
  return ROMAN_NUMERALS.map(([symbol, value]) => {
    const count = Math.floor(remaining / value)
    remaining %= value
    return symbol.repeat(count)
  }).join("")
}
