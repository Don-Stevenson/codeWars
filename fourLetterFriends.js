const friendsArr = ["Ryan", "Jimmy", "123", "4", "Cool Man"];

const findFriend = (array) => {
  return (fourLetterFriends = array.filter((element) => element.length === 4));
};
console.log(findFriend(friendsArr));
