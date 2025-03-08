class Pizza {
  private topping: string
  private toppings: string[]

  constructor(type: string) {
    this.toppings = [this.topping]
  }

  public bakingTime(time: number) {
    return this.toppings
  }
}

console.log(new Pizza("cheese"))
