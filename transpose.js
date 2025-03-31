export const transpose = matrix => {
  if (!matrix.length) return []
  const getMaxLength = element => Math.max(...element.map(row => row.length))
  const maxColLength = getMaxLength(matrix)
  const transposedMatrix = []
  for (let col = 0; col < maxColLength; col++) {
    let newRow = ""
    for (let row = 0; row < matrix.length; row++) {
      if (col >= matrix[row].length) {
        if (needsPadding(matrix, row, col)) {
          newRow += " "
        }
        continue
      }
      newRow += matrix[row][col]
    }
    transposedMatrix.push(newRow)
  }
  return transposedMatrix
}
const needsPadding = (matrix, currentRow, col) => {
  for (let row = currentRow + 1; row < matrix.length; row++) {
    if (col < matrix[row].length) return true
  }
  return false
}
