const friends = ["Ryan", "Jimmy", "123", "4", "Cool Man"];

const friend = (friends) => {
  return (fourLetterFriends = friends.filter((x) => x.length === 4));
};
console.log(friend(friends));
