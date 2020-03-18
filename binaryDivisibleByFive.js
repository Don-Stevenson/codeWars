const divisibleByFive = (str) => {
    //convert binary num in string to a number
    let num = parseInt(str, 2)
    console.log("str is ", num)

    //is that num % 5 === 0
    return num % 5 === 0 ? true : false
}

console.log(divisibleByFive('101'))
console.log(divisibleByFive('1010101010010001'))