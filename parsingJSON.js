// works in react

const catFetch = async () => {
  try {
    const catResponse = await fetch(
      "https://api.thecatapi.com/v1/breeds/search?q=maine%20coon"
    )
    const catJSON = await catResponse.json()
    return catJSON
  } catch (error) {
    console.error(error)
  }
}

// log catFetch to the console
console.log(catFetch())
