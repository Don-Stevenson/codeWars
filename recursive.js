// practicing recursion to find embeded elements with in an array
//**************************************************************/

let arr = [[[[[1, [[2, [[3, ['b']]]]]]]]]]

const findLetterB = (arr) => {
    for (let item of arr) {
        if (Array.isArray(item)) {
            console.log('...going to the next nested array')
            return findLetterB(item);
        } else if (item === 'b') {
            return `found ${item} here`;
        }
    }
    return `didn't find 'b' anywhere`;
}
console.log(findLetterB(arr))

// counting up with recursion
//***************************/
const countUsingRecursion = (count) => {
    while (count < 10) {
        console.log(count);
        return countUsingRecursion(count + 1);
    }
    return count;
}
// console.log(countUsingRecursion(0))

// counting down with recursion
//*****************************/
const countDownFrom = (count) => {
    while (count >= 0) {
        console.log(count);
        return countDownFrom(count - 1);
    }
    return count;
}
// console.log(countDownFrom(10))

// old way of counting up, c style loop
//*************************************/
const oldCounter = (countTo) => {
    for (let i = 0; i <= countTo; i++) {
        console.log(`the count is: ${i}`);
    }
}

// oldCounter(10);

// old way of counting down, c style loop 
//***************************************/
const oldCountDown = (countFrom) => {
    for (let i = countFrom; i >= 0; i--) {
        console.log(`the count is: ${i}`);
    }
}
// oldCountDown(10);