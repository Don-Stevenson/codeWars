export const convert = (num: number): string => {
  const factors = [
    [3, "Pling"],
    [5, "Plang"],
    [7, "Plong"],
  ] as const

  return (
    factors.reduce(
      (result, [factor, sound]) =>
        num % factor === 0 ? result + sound : result,
      ""
    ) || `${num}`
  )
}
