// fetch cats from cat api
// filter them on some condition
// can you filter in the fetch?
// i.e. does filter handle async?

import fetch from "node-fetch"

const catFetchFilter = async () => {
    try {
        const catsArr = await fetch(
            "https://api.thecatapi.com/v1/images/search?limit=10"
        )
        // const catsArrJSON = await catsArr.json().filter((cat) => cat.height > 500)
        // console.log(catsArrJSON) => throws and error because you cant use filter on a async call

        const catsArrJSON = await catsArr.json()

        //  Filtering after the fetch has been made works
        const longCats = catsArrJSON.filter(cat => cat.height > 500 && cat.width > 2000)
        console.log(longCats)
        return longCats
    } catch (error) {
        console.error(error)
    }
}
catFetchFilter()