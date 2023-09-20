import pkg from "lodash"
const { findIndex, get } = pkg

const lines = [
  "Winnipeg MB",
  "278 Elm Street",
  "Sheetal Jaitly",
  "JA",
  "416-908-9995",
  "$200.00",
  "Date Sep 10 2023",
  "R3M 3H1",
]
const classifyString = testData => {
  // regexes used
  const priceRegex = /^\$?[0-9]+(\.[0-9][0-9])?$/
  const phoneRegex = /(\(?)\d{3}(\)?)(-?|\s?)\d{3}(-?|\s?)\d{4}/
  const postalCodeRegex = /[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/
  const firstPartOfPostalCodeRegex = /[A-Z][0-9][A-Z]/
  const streetAddressRegex = /\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+/g
  const cityAndProvinceRegex =
    /^[A-Za-z ]+,? ?((AB|BC|SK|MB|ON|QC|N[BSTLU]|PE|YT|Alberta|ALBERTA|British Columbia|BRITISH COLUMBIA|Saskatchewan|SASKATCHEWAN|Manitoba|MANITOBA|Ontario|ONTARIO|Quebec|QUEBEC|New Brunswick|NEW BRUNSWICK|Nova Scotia|NOVA SCOTIA|Prince Edward Island|PRINCE EDWARD ISLAND|Newfoundland and Labrador|NEWFOUNDLAND AND LABRADOR|Nunavut|NUNAVUT|Northwest Territories|NORTHWEST TERRITORIES|Yukon|YUKON),? ?)$/
  const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+ ?-?[a-zA-Z]+$/

  // handles the price
  const [priceLine] = testData.filter(line => line.match(priceRegex))
  const getsPrice = line => {
    if (priceRegex.test(line)) {
      const [price] = line.match(priceRegex)
      return price
    }
    return "Price not found."
  }
  const priceLineIndex = findIndex(testData, line => {
    return line.match(priceRegex)
  })

  const price = getsPrice(priceLine)

  if (price) testData.splice(priceLineIndex, 1)

  // handles the phone number
  const phoneLineIndex = findIndex(testData, line => line.match(phoneRegex))

  const getsPhoneNumber = (testData, phoneLineIndex) => {
    const phone = get(testData, phoneLineIndex, "")
    return phone ? phone.replace(/-/g, "") : "Phone number not found."
  }
  const customerPhone = getsPhoneNumber(testData, phoneLineIndex)

  if (customerPhone) {
    testData.splice(phoneLineIndex, 1)
  }

  // handles the postal code
  const [postalCodeLine] = testData.filter(line => line.match(postalCodeRegex))

  const postalCodeLineIndex = findIndex(testData, line =>
    line.match(postalCodeRegex)
  )

  const checkPostalCodeOwnLine = postalCodeLine => {
    if (!postalCodeLine) return ""
    if (postalCodeLine.length === 7) {
      return testData.splice(postalCodeLineIndex, 1)
    } else return ""
  }

  const postalIfOnItsOwnLine = checkPostalCodeOwnLine(postalCodeLine)

  const getsPostalCode = postalCodeLine => {
    if (!postalCodeLine) return ""
    else {
      const addressArray = postalCodeLine.split(" ")

      const postalCodeFirstHalfIndex = findIndex(addressArray, line =>
        line.match(firstPartOfPostalCodeRegex)
      )
      const postalCode = `${addressArray[postalCodeFirstHalfIndex]} ${
        addressArray[postalCodeFirstHalfIndex + 1]
      }`
      return postalCode
    }
  }
  const parsedPostalCode = getsPostalCode(postalCodeLine)

  // handles the address
  const removesPostalCodeFromAddress = postalCodeLine => {
    if (!postalCodeLine) {
      return testData.filter(line => {
        line.match(cityAndProvinceRegex)
      })
    }
    if (postalCodeLine) {
      const addressArray = postalCodeLine.split(" ")
      const postalCodeArray = parsedPostalCode.split(" ")
      return addressArray.filter(item => !postalCodeArray.includes(item))
    }
  }

  const cityAndProvinceNoPostalCode =
    removesPostalCodeFromAddress(postalCodeLine)

  // handles the street address
  const [streetLine] = testData.filter(line => line.match(streetAddressRegex))
  const [streetAddress] = streetLine ? streetLine.match(streetAddressRegex) : ""
  const streetIndex = findIndex(testData, line =>
    line.match(streetAddressRegex)
  )

  // conditionally removes street address
  if (cityAndProvinceNoPostalCode || streetLine.length > 0) {
    testData.splice(streetIndex, 1)
  }

  const cityIndex = findIndex(testData, line => {
    return line.match(cityAndProvinceRegex)
  })

  const getCityAndProvince = lines => {
    return lines.filter(line => {
      if (cityIndex !== -1) {
        return line.match(cityAndProvinceRegex)
      }
    })
  }

  const cityAndProvince = getCityAndProvince(testData)

  const cityAndProvinceSplit =
    cityAndProvince.length > 0
      ? cityAndProvince[0].split(" ")
      : cityAndProvinceNoPostalCode

  // conditionally removes city and province it from consideration
  if (cityAndProvinceSplit.length > 0) {
    testData.splice(cityIndex, 1)
  }

  // handles full name
  const [fullNameLine] = testData.filter(line => line.match(fullNameRegex))
  const [fullName] = fullNameLine ? fullNameLine.match(fullNameRegex) : ""
  const customerName = fullName ? fullName : "Full name not found."

  const customerAddress = `${
    streetAddress ? streetAddress : "Street address not found."
  } ${
    cityAndProvinceSplit[0]
      ? cityAndProvinceSplit[0]
      : "Town or City not found."
  } ${
    cityAndProvinceSplit[1] ? cityAndProvinceSplit[1] : "Province not found."
  } ${postalIfOnItsOwnLine ? postalIfOnItsOwnLine : parsedPostalCode}`

  const parsed = {
    price,
    customerPhone,
    customerAddress,
    customerName,
  }
  return parsed
}

console.log(classifyString(lines))
