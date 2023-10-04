import fetch from "node-fetch"

const catFetch = async () => {
  try {
    const catResponse = await fetch(
      "https://api.thecatapi.com/v1/breeds/search?q=maine%20coon"
    )
    const catJSON = await catResponse.json()
    const catJSONobj = catJSON[0]
    console.log(catJSONobj.description)
  } catch (error) {
    console.error(error)
  }
}

// logs catFetch to the console
catFetch()
// expect
// They are known for their size and luxurious long coat Maine Coons are considered a gentle giant.
// The good-natured and affable Maine Coon adapts well to many lifestyles and personalities.
// She likes being with people and has the habit of following them around, but isn’t needy.
// Most Maine Coons love water and they can be quite good swimmers.
