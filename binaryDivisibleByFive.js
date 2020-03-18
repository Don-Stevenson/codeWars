const divisibleByFive = (str) => {
    //convert binary num in string to a number

    //is that num % 5 === 0
    return str % 5 === 0 ? true : false
}

console.log(divisibleByFive(5))