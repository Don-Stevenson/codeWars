const log1 = [
  ["1213", "user_1", "1160"],
  ["0010", "user_2", "0325"],
  ["0213", "user_3", "0650"],
  ["0010", "user_2", "0060"],
  ["1213", "user_1", "1260"],
  ["0010", "user_4", "9850"],
  ["0513", "user_1", "0713"],
  ["0050", "user_2", "0090"],
]

const findUserLowestLoginAndHighestLogoutTimes = logArr => {
  const userTimes = {}

  logArr.forEach(([loginTime, user, logoutTime]) => {
    const login = Number(loginTime)
    const logout = Number(logoutTime)

    if (!userTimes[user]) {
      userTimes[user] = [login, logout]
    } else {
      const currentUserLowestLogin = userTimes[user][0]
      const currentUserHighestLogut = userTimes[user][1]

      if (login < currentUserLowestLogin) {
        userTimes[user][0] = login
      }
      if (logout > currentUserHighestLogut) {
        userTimes[user][1] = logout
      }
    }
  })
  return userTimes
}

console.log(findUserLowestLoginAndHighestLogoutTimes(log1))
