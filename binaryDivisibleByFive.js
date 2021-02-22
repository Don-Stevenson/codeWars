const divisibleByFive = (str) => {
    // convert binary num in string to a number
    const num = parseInt(str, 2)
    // prints out what the number is
    console.log("str is ", num)

    // is that num % 5 === 0
    return num % 5 === 0 ? true : false
}

console.log(divisibleByFive('001'))
console.log(divisibleByFive('1010101010010001'))