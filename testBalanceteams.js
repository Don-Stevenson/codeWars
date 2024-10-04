function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function balanceTeams(players, numTeams) {
  const playersThisWeek = players.filter(player => player.isPlayingThisWeek)

  // Create a copy of the players array and shuffle it
  const shuffledPlayers = shuffleArray([...playersThisWeek])

  const teams = Array.from({ length: numTeams }, () => ({
    players: [],
    totalScore: 0,
    totalAttackScore: 0,
    totalDefenseScore: 0,
    fitnessScore: 0,
    genderCount: { male: 0, female: 0 },
  }))

  // Sort players by gender and then by total score
  shuffledPlayers.sort((a, b) => {
    if (a.gender !== b.gender) return a.gender.localeCompare(b.gender)
    return (
      b.attackScore +
      b.defenseScore +
      b.fitnessScore -
      (a.attackScore + a.defenseScore + a.fitnessScore)
    )
  })

  // Distribute players using a modified serpentine draft method
  for (let i = 0; i < shuffledPlayers.length; i++) {
    const player = shuffledPlayers[i]
    let teamIndex

    if (i < numTeams * 2) {
      // For the first two rounds, distribute evenly
      teamIndex = i % numTeams
    } else {
      // After that, find the team with the lowest total score
      teamIndex = teams.reduce(
        (minIndex, team, index, arr) =>
          team.totalScore < arr[minIndex].totalScore ? index : minIndex,
        0
      )
    }

    const team = teams[teamIndex]

    // Calculate player's weighted total score
    player.totalScore =
      player.attackScore * 0.4 +
      player.defenseScore * 0.4 +
      player.fitnessScore * 0.2

    team.players.push(player)
    team.totalScore += player.totalScore
    team.totalAttackScore += player.attackScore
    team.totalDefenseScore += player.defenseScore
    team.fitnessScore += player.fitnessScore
    team.genderCount[player.gender]++
  }

  // Log team information
  teams.forEach((team, index) => {
    console.log(`\nTeam ${index + 1}:`)
    console.log(`Total Score: ${team.totalScore.toFixed(2)}`)
    console.log(
      `Total Attack: ${team.totalAttackScore.toFixed(
        2
      )}, Total Defense: ${team.totalDefenseScore.toFixed(2)}`
    )
    console.log(`Fitness Score: ${team.fitnessScore.toFixed(2)}`)
    console.log(
      `Males: ${team.genderCount.male}, Females: ${team.genderCount.female}`
    )

    team.players.sort((a, b) => b.totalScore - a.totalScore)

    team.players.forEach(player => {
      console.log(
        `${player.name} - Attack: ${player.attackScore}, Defense: ${
          player.defenseScore
        }, Fitness: ${player.fitnessScore}, Total: ${player.totalScore.toFixed(
          2
        )}, Gender: ${player.gender}`
      )
    })
  })

  return teams
}
const team = [
  {
    _id: "66f063261c87920050d78d2d",
    name: "Don",
    attackScore: 40,
    defenseScore: 40,
    fitnessScore: 50,
    gender: "male",
    isPlayingThisWeek: true,
    createdAt: "2024-09-22T18:34:14.885Z",
    updatedAt: "2024-09-22T18:34:14.885Z",
  },
  {
    _id: "66f063751c87920050d78d31",
    name: "Paul",
    attackScore: 47,
    defenseScore: 40,
    fitnessScore: 50,
    gender: "male",
    isPlayingThisWeek: true,
    createdAt: "2024-09-22T18:35:33.833Z",
    updatedAt: "2024-09-22T18:35:33.833Z",
  },
  {
    _id: "66f063b71c87920050d78d34",
    name: "Lew",
    attackScore: 42,
    defenseScore: 40,
    fitnessScore: 50,
    gender: "male",
    isPlayingThisWeek: true,
    createdAt: "2024-09-22T18:36:39.127Z",
    updatedAt: "2024-09-22T18:36:39.127Z",
  },
  {
    _id: "66f063ce1c87920050d78d36",
    name: "Graham",
    attackScore: 5,
    defenseScore: 10,
    fitnessScore: 25,
    gender: "male",
    isPlayingThisWeek: false,
    createdAt: "2024-09-22T18:37:02.077Z",
    updatedAt: "2024-09-22T18:37:02.077Z",
  },
  {
    _id: "66f0649f3bbc5163fba137c2",
    name: "Peter",
    attackScore: 30,
    defenseScore: 35,
    fitnessScore: 35,
    gender: "male",
    isPlayingThisWeek: false,
    createdAt: "2024-09-22T18:40:31.244Z",
    updatedAt: "2024-09-22T18:40:31.244Z",
  },
  {
    _id: "66f06b9b3bbc5163fba137c6",
    name: "George",
    attackScore: 27,
    defenseScore: 38,
    fitnessScore: 30,
    gender: "male",
    isPlayingThisWeek: false,
    createdAt: "2024-09-22T19:10:19.904Z",
    updatedAt: "2024-09-22T19:10:19.904Z",
  },
  {
    _id: "66f06b9b3bbc5163fba137c6",
    name: "Georgina",
    attackScore: 27,
    defenseScore: 38,
    fitnessScore: 30,
    gender: "female",
    isPlayingThisWeek: false,
    createdAt: "2024-09-22T19:10:19.904Z",
    updatedAt: "2024-09-22T19:10:19.904Z",
  },
  {
    _id: "66f063261c87920050d78d2d",
    name: "not good",
    attackScore: 10,
    defenseScore: 10,
    fitnessScore: 10,
    gender: "male",
    isPlayingThisWeek: true,
    createdAt: "2024-09-22T18:34:14.885Z",
    updatedAt: "2024-09-22T18:34:14.885Z",
  },
  {
    _id: "66f063261c87920050d78d2d",
    name: "Susan",
    attackScore: 40,
    defenseScore: 40,
    fitnessScore: 25,
    gender: "female",
    isPlayingThisWeek: true,
    createdAt: "2024-09-22T18:34:14.885Z",
    updatedAt: "2024-09-22T18:34:14.885Z",
  },
]

balanceTeams(team, 2)
