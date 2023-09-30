import fetch from "node-fetch"

const catFetch = async () => {
  try {
    const catResponse = await fetch(
      "https://api.thecatapi.com/v1/breeds/search?q=maine%20coon"
    )
    const catJSON = await catResponse.json()
    const catJSONobj = await catJSON[0]
    console.log(catJSONobj.description)
  } catch (error) {
    console.error(error)
  }
}

// logs catFetch to the console
catFetch()
