export class Anagram {
  private target: string
  private normalizedTarget: string
  constructor(input: string) {
    this.target = input.toLowerCase()
    this.normalizedTarget = this.normalize(input)
  }
  private normalize(word: string): string {
    return word.toLowerCase().split("").sort().join("")
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter(
      word =>
        word.toLowerCase() !== this.target &&
        this.normalize(word) === this.normalizedTarget
    )
  }
}
