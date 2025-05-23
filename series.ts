export class Series {
  private numberThatIsAString: string

  constructor(series: string) {
    this.numberThatIsAString = series
  }
  slices(sliceLength: number): number[][] {
    // let arr = []

    if (this.numberThatIsAString.length === 0) {
      throw new Error("series cannot be empty")
    } else if (sliceLength < 0) {
      throw new Error("slice length cannot be negative")
    } else if (sliceLength === 0) {
      throw new Error("slice length cannot be zero")
    } else if (sliceLength > this.numberThatIsAString.length) {
      throw new Error("slice length cannot be greater than series length")
    }
    // for (let i = 0; i <= this.numberThatIsAString.length - sliceLength; i++) {
    //   arr.push(this.numberThatIsAString.slice(i, i + sliceLength).split('').map(x => +x))
    // }
    // return arr

    console.log(this.numberThatIsAString.split("").map(x => [x]))

    return this.numberThatIsAString.split("").map(x => [parseInt(x)])
  }
}
