// a place to try out console assert
// *********************************

// only asserts when evaluates a thing to be false

// console.assert("", "its empty")
// expect Assertion failed: its empty

console.assert("1", "its empty")
// expect no message

const arr = [1,2,3,4,5,6,7,"8",""]

const doesArrContainTwo =  (arr) => {
    arr.map((element) => {
        console.assert(element !== 2, "found the number 2")
    })
}

doesArrContainTwo(arr)
// expect Assertion failed: found the number 2