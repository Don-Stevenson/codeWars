class Pizza {
  constructor(private readonly toppings: string[]) {}

  public getBakingTimeMessage(minutes: number): string {
    const toppingsList = this.toppings.join(", ")
    return `Your ${toppingsList} pizza will take ${minutes} minutes to bake`
  }
}

// Example usage
const myPizza = new Pizza(["cheese", "mushrooms", "pepperoni"])
console.log(myPizza.getBakingTimeMessage(30))

class Skateboard {
  constructor(
    private readonly fitting1: string,
    private readonly fitting2: string
  ) {}

  public getDescription(color: string): string {
    return `Your skateboard will have the following gear: ${this.fitting1} and ${this.fitting2}, and it will be ${color} in color`
  }
}

// Example usage
const mySkateBoard = new Skateboard("swiss bearings", "bananaboard")
console.log(mySkateBoard.getDescription("blue"))
