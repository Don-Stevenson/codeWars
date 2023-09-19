import pkg from "lodash"
const { findIndex, get } = pkg

// /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(\.)?(\w*)?(\.)?(\s*\d{0,2}\s*),(\s*\d{4})/
// return what kind of data it is
// NOTE: if phone number is (416)-908 999, concatenated to customerAddress, it considers it a postal code
const lines = [
  "Winnipeg, MB",
  "278 Elm Street",
  "JA",
  "$200",
  "416-908-9995",
  "Date Sep 10 2023",
  "R3M 3H1",
  "Sheetal Jaitly",
]
const classifyString = testData => {
  const priceRegex = /(?<=\$?)(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/
  const [priceLine] = testData.filter(line => line.match(priceRegex))

  const getsPrice = line => {
    if (priceRegex.test(line)) {
      const [price] = line.match(priceRegex)
      return price
    }
    return ""
  }
  const priceLineIndex = findIndex(testData, line => {
    return line.match(priceRegex)
  })

  const price = getsPrice(priceLine)
  // console.log({ price })
  // console.log({ priceLineIndex })

  // removes price line
  // console.log("test before price removed", testData)
  if (price) testData.splice(priceLineIndex, 1)
  // console.log("test data after price removed", testData)

  const phoneLineIndex = findIndex(testData, line =>
    line.match(/(\(?)\d{3}(\)?)(-?|\s?)\d{3}(-?|\s?)\d{4}/)
  )

  const getsPhoneNumber = (testData, phoneLineIndex) => {
    const phone = get(testData, phoneLineIndex, "")
    return phone ? phone.replace(/-/g, "") : ""
  }
  const customerPhone = getsPhoneNumber(testData, phoneLineIndex)
  // console.log(customerPhone)
  // Find phone number and remove it from consideration
  testData.splice(phoneLineIndex, 1)
  // console.log("test data after phone removed", testData)

  // find a line that matches the postal code regex
  const [postalCodeLine] = testData.filter(line =>
    line.match(/[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/)
  )
  const postalCodeLineIndex = findIndex(testData, line =>
    line.match(/[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/)
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
        line.match(/[A-Z][0-9][A-Z]/)
      )
      const postalCode = `${addressArray[postalCodeFirstHalfIndex]} ${
        addressArray[postalCodeFirstHalfIndex + 1]
      }`
      return postalCode
    }
  }

  // console.log("Here get PostalCode", getsPostalCode(postalCodeLine))

  const parsedPostalCode = getsPostalCode(postalCodeLine)

  const cityAndProvinceRegex =
    /^[A-Za-z ]+,? ?((AB|BC|SK|MB|ON|QC|N[BSTLU]|PE|YT|Alberta|ALBERTA|British Columbia|BRITISH COLUMBIA|Saskatchewan|SASKATCHEWAN|Manitoba|MANITOBA|Ontario|ONTARIO|Quebec|QUEBEC|New Brunswick|NEW BRUNSWICK|Nova Scotia|NOVA SCOTIA|Prince Edward Island|PRINCE EDWARD ISLAND|Newfoundland and Labrador|NEWFOUNDLAND AND LABRADOR|Nunavut|NUNAVUT|Northwest Territories|NORTHWEST TERRITORIES|Yukon|YUKON),? ?)$/

  const removesPostCodeFromAddress = postalCodeLine => {
    console.log({ postalCodeLine })
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

  // Find street and remove it from consideration
  const [streetLine] = testData.filter(line =>
    line.match(/\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+/g)
  )
  const [streetAddress] = streetLine
    ? streetLine.match(/\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+/g)
    : ""
  const streetIndex = findIndex(testData, line =>
    line.match(/\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+/g)
  )
  testData.splice(streetIndex, 1)

  console.log("test data after street removed", testData)

  const cityAndProvinceNoPostalCode = removesPostCodeFromAddress(postalCodeLine)
  console.log({ cityAndProvinceNoPostalCode })

  // need to remove postal code from testdata
  const cityIndex = findIndex(testData, line => {
    return line.match(cityAndProvinceRegex)
  })
  // console.log({ cityIndex })
  const getCityAndProvince = lines => {
    return lines.filter(line => {
      if (cityIndex !== -1) {
        return line.match(cityAndProvinceRegex)
      }
    })
  }
  const cityAndProvince = getCityAndProvince(testData)
  console.log({ cityAndProvince })
  const cityAndProvinceSplit =
    cityAndProvince.length > 0
      ? cityAndProvince[0].split(" ")
      : cityAndProvinceNoPostalCode

  testData.push(`${cityAndProvince[0]} ${cityAndProvince[1]}`)

  // { cityAndProvinceNoPostalCode: [ 'Winnipeg,', 'MB' ] } - if postal code is in the same line
  // { cityAndProvince: [ 'Winnipeg, MB' ] } - if postal code is in another line

  // join if noPostalCode into one value, then push that to testData, then we don't need to use
  // cityAndProvince[0] and

  // remove city and province it from consideration
  testData.splice(cityIndex, 1)

  console.log("test data after city removed", testData)

  // TODO: Find name and remove it from consideration
  // update to datawithOutPostal code instead of filter
  const [fullNameLine] = testData.filter(line =>
    line.match(/^[a-zA-Z]+ [a-zA-Z]+ ?-?[a-zA-Z]+$/)
  )
  // console.log({ fullNameLine })
  const fullNameIndex = findIndex(testData, line =>
    line.match(/^[a-zA-Z]+ [a-zA-Z]+ ?-?[a-zA-Z]+$/)
  )
  const [customerName] = fullNameLine
    ? fullNameLine.match(/^[a-zA-Z]+ [a-zA-Z]+ ?-?[a-zA-Z]+$/)
    : ""
  // console.log({ customerName })
  testData.splice(fullNameIndex, 1)

  // console.log("testData after splice after name removed", testData)

  // clean up the following

  // TODO: concat streetAddress, city and postal code
  // TODO: if postal code is there, concat it to address

  const customerAddress = `${streetAddress} ${
    cityAndProvinceSplit[0]
      ? cityAndProvinceSplit[0]
      : "City could not be read."
  } ${
    cityAndProvinceSplit[1]
      ? cityAndProvinceSplit[1]
      : "Province could not be read."
  } ${postalIfOnItsOwnLine ? postalIfOnItsOwnLine : parsedPostalCode}`

  const parsed = {
    price,
    customerPhone,
    customerAddress,
    customerName,
  }

  return parsed
}

// works with proper postal code, breaks with out
// console logs parsed above
console.log(classifyString(lines))
