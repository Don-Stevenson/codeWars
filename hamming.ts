const compute = (left: string, right: string): number => {
  if (left.length === 0 && right.length === 0) return 0

  if (left.length !== right.length) {
    throw new Error("DNA strands must be of equal length.")
  }

  return left.split("").filter((char, index) => char !== right[index]).length
}
