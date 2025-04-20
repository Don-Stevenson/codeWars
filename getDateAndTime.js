/**
 * Parses a date string in the format "DD/MM/YYYY" and returns an object with day, month, and year
 * @param {string} dateString - Date string in the format "DD/MM/YYYY"
 * @returns {Object} Object containing day, month, and year
 * @throws {Error} If the date string is invalid
 */
function parseDate(dateString) {
  // Validate input format
  if (!dateString || typeof dateString !== "string") {
    throw new Error("Invalid date string provided")
  }

  // Check if the date string matches the expected format (DD/MM/YYYY)
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/
  const match = dateString.match(dateRegex)

  if (!match) {
    throw new Error("Date string must be in the format DD/MM/YYYY")
  }

  const day = parseInt(match[1], 10)
  const month = parseInt(match[2], 10)
  const year = parseInt(match[3], 10)

  // Validate date components
  if (day < 1 || day > 31) {
    throw new Error("Invalid day value")
  }

  if (month < 1 || month > 12) {
    throw new Error("Invalid month value")
  }

  // Basic validation for year (could be enhanced based on requirements)
  if (year < 1000 || year > 9999) {
    throw new Error("Invalid year value")
  }

  return { day, month, year }
}

// Example usage
const dateString = "12/08/2020"

try {
  const { day, month, year } = parseDate(dateString)
  console.log({ day, month, year })
} catch (error) {
  console.error(`Error parsing date: ${error.message}`)
}
