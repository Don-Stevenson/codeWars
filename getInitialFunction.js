const getFirstNameInitials = name => {
  return name.split(" ").map(n => n[0])[0]
}

// console.log(getFirstNameInitials("John Doe"))
// console.log(getFirstNameInitials("Jane Smith"))
// console.log(getFirstNameInitials("Alice Johnson"))

const onlyReturnNewInitialIfInitialIsNotTheSameAsPrevious = (
  name,
  previousInitial
) => {
  if (getFirstNameInitials(name) === previousInitial) return
  return previousInitial
}

console.log(
  onlyReturnNewInitialIfInitialIsNotTheSameAsPrevious("John Doe", "J")
)
console.log(
  onlyReturnNewInitialIfInitialIsNotTheSameAsPrevious("Alice Johnson", "A")
)
console.log(
  onlyReturnNewInitialIfInitialIsNotTheSameAsPrevious("Jane Smith", "K")
)
