const input = process.argv[2]

const slap = input => {
  if (input === "racoon says hi") {
    console.log("racoon eats trash")
  }
  if (input === "if there is a trash can, there is a racoon") {
    console.log("racoon is a trash")
  } else {
    console.log("car hits trash can")
  }
}
slap(input)
