// works in react

const catFetch = async () => {
  try {
    const catResponse = await fetch(
      "https://api.thecatapi.com/v1/breeds/search?q=maine%20coon"
    )
    console.log({ catResponse })
    const catJSON = await catResponse.json()
    console.log("here as JSON", catJSON[0].description)
    return catJSON
  } catch (error) {
    console.error(error)
  }
}

catFetch() // calls and logs to console
