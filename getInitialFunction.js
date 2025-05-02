const getFirstNameInitials = name => {
  return name.split(" ").map(n => n[0])[0]
}

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
