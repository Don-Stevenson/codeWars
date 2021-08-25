// function that takes in an array and
// returns an array with elements that's length is equal to 4
// **********************************************************

const friendsArr = ["Ryan", "Jimmy", "123", "4", "Cool Man"];

const findFriend = array => array.filter((element) => element.length === 4);

console.log(findFriend(friendsArr));
// expect ['Ryan']
