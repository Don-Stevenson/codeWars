const log1 = [
  ["1213", "user_1", "1260"],
  ["0010", "user_2", "0325"],
  ["0213", "user_3", "0650"],
  ["0010", "user_2", "0060"],
  ["1213", "user_1", "1260"],
  ["0010", "user_4", "9850"],
  ["0513", "user_1", "0713"],
  ["0050", "user_2", "0090"],
]

const findUserLoginTimes = logArr => {
  const userTimes = {}

  logArr.forEach(([loginTime, user, logoutTime]) => {
    const login = Number(loginTime)
    const logout = Number(logoutTime)

    if (!userTimes[user]) {
      userTimes[user] = [login, logout]
    } else {
      if (login < userTimes[user].earliestTime) {
        userTimes[user][0] = login
      }
      if (logout > userTimes[user].latestTime) {
        userTimes[user][1] = logout
      }
    }
  })
  return userTimes
}

console.log(findUserLoginTimes(log1))
