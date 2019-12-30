function allLetters(str) {
  let alpha = new Set("abcdefghijklmnopqrstuvwxyz")
  for (let c of str.toLowerCase()) {
    alpha.delete(c)
    if (alpha.size == 0) return true
  }
  return false
}

