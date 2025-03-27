// fetch cats from cat api
// filter them on some condition
// can you filter in the fetch?
// i.e. does filter handle async?

import fetch from "node-fetch"

const catFetchFilter = async () => {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const cats = await response.json()

    // Define filter conditions
    const filterLargeImages = cat => cat.height > 500 && cat.width > 2000
    const filterSmallImages = cat => cat.height < 500 && cat.width < 2000

    // Apply filters
    const longWideCats = cats.filter(filterLargeImages)
    const shortNarrowCats = cats.filter(filterSmallImages)

    console.log({ longWideCats, shortNarrowCats })

    // Return both arrays as an object
    return {
      longWideCats,
      shortNarrowCats,
    }
  } catch (error) {
    console.error("Error fetching or filtering cats:", error)
    throw error // Re-throw to allow handling by caller
  }
}

catFetchFilter()
  .then(result => console.log("Filtered cats:", result))
  .catch(error => console.error("Failed to filter cats:", error))
