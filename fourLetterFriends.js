const friends = ["Ryan", "Jimmy", "123", "4", "Cool Man"];

const findFriend = (friends) => {
  return (fourLetterFriends = friends.filter((element) => element.length === 4));
};
console.log(findFriend(friends));
