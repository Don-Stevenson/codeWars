export const truncate = input => {
  const splitInput = [...input]

  const trimmed = splitInput.slice(0, 5)
  return trimmed.join("")
}
