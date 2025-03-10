class Pizza {
  private toppings: string[]

  constructor(toppings: string[]) {
    this.toppings = toppings
  }

  public bakingTime(time: number): string {
    const toppingsList = this.toppings.join(", ")
    return `Your ${toppingsList} pizza will take ${time} minutes to bake`
  }
}

// Create a pizza and check its baking time
const myPizza = new Pizza(["cheese", "mushrooms", "pepperoni"])
console.log(myPizza.bakingTime(30))

class Skateboard {
  private readonly fitting1: string
  private readonly fitting2: string

  constructor(fitting1: string, fitting2: string) {
    this.fitting1 = fitting1
    this.fitting2 = fitting2
  }

  public getDescription(color: string): string {
    return `Your skateboard will have the following gear: ${this.fitting1} and ${this.fitting2}, and it will be ${color} in color`
  }
}

const mySkateBoard = new Skateboard("swiss bearings", "bananaboard")
console.log(mySkateBoard.getDescription("blue"))
