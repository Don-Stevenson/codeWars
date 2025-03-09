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

class skateBoard {
  private fitting1: string
  private fitting2: string

  constructor(fitting1: string, fitting2: string) {
    this.fitting1 = fitting1
    this.fitting2 = fitting2
  }

  public deckColour(colour: string): string {
    return `Your skate board will have the following gear: ${this.fitting1} and ${this.fitting2}, and it will be ${colour} in colour`
  }
}

const mySkateBoard = new skateBoard("swiss bearings", "bananaboard")
console.log(mySkateBoard.deckColour("blue"))
