// fetch cats from cat api
// filter them on some condition
// can you filter in the fetch? 
// i.e. does filter handle async?

const catFetchFilter = async () => {
    const filteredCatsArr = await fetch("catapi")

    return filteredCatsArr
}

console.log(catFetchFilter());