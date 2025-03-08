class Pizza {
  private topping: string
  private toppings: string[]

  constructor(type: string) {
    this.topping = type
    this.toppings = [this.topping]
  }

  public bakingTime(time: number): string {
    return `Your ${this.topping} pizza will take ${time} minutes to bake`
  }
}

// Create a pizza and check its baking time
const myPizza = new Pizza("cheese")
console.log(myPizza.bakingTime(30))
