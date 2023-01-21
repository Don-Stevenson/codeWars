// fetch cats from cat api
// filter them on some condition
// can you filter in the fetch? 
// i.e. does filter handle async?

import fetch from 'node-fetch'


const catFetchFilter = async () => {
    const filteredCatsArr = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    // const filteredCatsArrJSON = await filteredCatsArr.json().filter((cat) => cat.id === '4d7')
    // console.log(filteredCatsArrJSON) => throws and error because you cant use filter on a async call


    const filteredCatsArrJSON = await filteredCatsArr.json()
    const longCats = filteredCatsArrJSON.filter((cat) => cat.height > 500)
    console.log(longCats)
    return longCats
}

catFetchFilter()