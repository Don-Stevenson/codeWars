import "dotenv/config"

const teamId = process.env.TEAM_ID

// From cookie
const refreshToken = process.env.REFRESH_TOKEN

// GraphQL queries
const ACTIVITIES_QUERY = `
query UpcomingActivitiesList($teamid: String!, $cursor: String, $past: Boolean) {
  activities(input: { teamid: $teamid, cursor: $cursor, past: $past }) {
    edges {
      node {
        _id
        title
        startdate
        meetdate
        cancelled
        isPast
      }
    }
  }
}`

const ACTIVITY_QUERY = `
query GetActivity($teamid: String!, $activityid: String!) {
  activity(input: {teamid: $teamid, activityid: $activityid}) {
    node {
      ...Activity
    }
  }
}

fragment Activity on Activity {
  _id
  title
  startdate
  enddate
  meetdate
  location {
    name
    address
    country
    city
    longitude
    latitude
    __typename
  }
  other
  tag {
    name
    color
    __typename
  }
  opponent {
    _id
    name
    contactName
    phone
    email
    __typename
  }
  timezone
  venue
  inviteType
  invitedGroups
  coachReminded
  isRecurring
  cancelled
  isPast
  maxAttendees
  rsvpDueDate
  members {
    _id
    attending
    answeredAt
    attendanceDetails {
      category
      note
      __typename
    }
    seen
    invite
    user {
      _id
      fullName
      profileImage
      __typename
    }
    role
    __typename
  }
  me {
    _id
    attending
    attendanceDetails {
      category
      note
      __typename
    }
    invite
    user {
      _id
      firstName
      fullName
      profileImage
      __typename
    }
    __typename
  }
  children {
    _id
    attending
    attendanceDetails {
      category
      note
      __typename
    }
    invite
    user {
      _id
      firstName
      fullName
      profileImage
      __typename
    }
    __typename
  }
  __typename
}`

/**
 * Get GraphQL authentication token using refresh token
 * @returns {Promise<string>} The auth token
 */
async function getGraphqlToken() {
  try {
    const response = await fetch("https://auth.heja.io/login/refreshToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "heja-api-version": "3",
        "x-app-version-brand": "web",
        Cookie: `refreshToken=${refreshToken}`,
      },
      body: JSON.stringify({
        credentialType: "refreshToken",
        refreshToken: "cookie",
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data.authToken
  } catch (error) {
    console.error("Error getting GraphQL token:", error)
    throw error
  }
}

/**
 * Make a GraphQL request to Heja API
 * @param {Object} query - The GraphQL query object
 * @returns {Promise<Object>} The response data
 */
async function hejaGraphqlRequest(query) {
  try {
    const token = await getGraphqlToken()

    const response = await fetch("https://web-api.heja.io/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0",
      },
      body: JSON.stringify(query),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error making GraphQL request:", error)
    throw error
  }
}

/**
 * Get upcoming games for a team
 * @param {Object} options - Options object
 * @param {string} options.teamId - The team ID
 * @param {string} [options.cursor] - Pagination cursor
 * @param {boolean} [options.past] - Whether to get past activities
 * @returns {Promise<Array>} Array of upcoming games
 */
async function upcomingGames({ teamId, cursor = null, past = false }) {
  try {
    const response = await hejaGraphqlRequest({
      operationName: "UpcomingActivitiesList",
      variables: {
        teamid: teamId,
        cursor,
        past,
      },
      query: ACTIVITIES_QUERY,
    })

    return response.data.activities.edges.map(edge => edge.node)
  } catch (error) {
    console.error("Error getting upcoming games:", error)
    throw error
  }
}

/**
 * Get RSVPs for a specific game
 * @param {Object} options - Options object
 * @param {string} options.teamId - The team ID
 * @param {string} options.gameId - The game/activity ID
 * @returns {Promise<Array<string>>} Array of full names of attendees
 */
async function rsvpsForGame({ teamId, gameId }) {
  try {
    const response = await hejaGraphqlRequest({
      operationName: "GetActivity",
      variables: {
        activityid: gameId,
        teamid: teamId,
      },
      query: ACTIVITY_QUERY,
    })

    const members = response.data.activity.node.members

    return members
      .filter(member => member.attending)
      .map(member => member.user.fullName)
  } catch (error) {
    console.error("Error getting RSVPs for game:", error)
    throw error
  }
}

// Example usage:
async function example() {
  try {
    // Get upcoming games
    const games = await upcomingGames({ teamId })
    console.log("Upcoming games:", games)

    // Get RSVPs for the first game
    if (games.length > 0) {
      const gameId = games[0]._id
      const rsvps = await rsvpsForGame({ teamId, gameId })
      console.log(
        `RSVPs for ${games[0].title} game on ${new Date(
          games[0].meetdate
        ).toDateString()}:`,
        rsvps
      )
    }
    // Get RSVPs for the second game
    if (games.length > 0) {
      const gameId = games[1]._id
      const rsvps = await rsvpsForGame({ teamId, gameId })
      console.log(
        `RSVPs for ${games[1].title} game on ${new Date(
          games[1].meetdate
        ).toDateString()}:`,
        rsvps
      )
    }
    // Get RSVPs for the third game
    if (games.length > 0) {
      const gameId = games[2]._id
      const rsvps = await rsvpsForGame({ teamId, gameId })
      console.log(
        `RSVPs for ${games[2].title} game on ${new Date(
          games[2].meetdate
        ).toDateString()}:`,
        rsvps
      )
    }
  } catch (error) {
    console.error("Example error:", error)
  }
}

// Export functions for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getGraphqlToken,
    hejaGraphqlRequest,
    upcomingGames,
    rsvpsForGame,
    teamId,
  }
}

// Uncomment to run example
example()
