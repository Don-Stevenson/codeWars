import pkg from "lodash"
const { findIndex, get } = pkg

const shouldIgnore = line =>
  !line ||
  line.match(/Tx:/) ||
  line.match(/Re(f|t)ills:/) ||
  line.match(/Date:/)

const lines =
  "$28.75\nSuresh Bhat\n18 ALEX CAMPELL\nKING CITY, Ontario\nA1A 1A1\n416-994-9860\nDate Apr 23 2020\nH\nTx: 182728839\nRefile:0\n"
const classifyString = text => {
  const testData = text.split("\n").filter(line => !shouldIgnore(line))
  // regexes used
  const priceRegex = /^\$[0-9]+(\.[0-9][0-9])?$/ // note: price regex requires a dollar sign to pass
  const phoneRegex = /(\(?)\d{3}(\)?)(-?|\s?)\d{3}(-?|\s?)\d{4}/
  const postalCodeRegex = /[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/
  const firstPartOfPostalCodeRegex = /[A-Z][0-9][A-Z]/
  const streetAddressRegex = /\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+/g
  const cityAndProvinceRegex =
    /^[A-Za-z ]+,? ?((AB|BC|SK|MB|ON|QC|N[BSTLU]|PE|YT|Alberta|ALBERTA|British Columbia|BRITISH COLUMBIA|Saskatchewan|SASKATCHEWAN|Manitoba|MANITOBA|Ontario|ONTARIO|Quebec|QUEBEC|New Brunswick|NEW BRUNSWICK|Nova Scotia|NOVA SCOTIA|Prince Edward Island|PRINCE EDWARD ISLAND|Newfoundland and Labrador|NEWFOUNDLAND AND LABRADOR|Nunavut|NUNAVUT|Northwest Territories|NORTHWEST TERRITORIES|Yukon|YUKON),? ?)$/
  const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+ ?-?[a-zA-Z]+$/

  // handles the price
  const getsPrice = arrayOfLines => {
    // if price is on its own line
    const priceWhenOnItsOwnline = arrayOfLines.filter(line =>
      priceRegex.test(line)
    )
    // if price is not on its own line
    const allCombinedElements = arrayOfLines
      .map(line => line.split(" "))
      .join()
      .split(",")
    const parsedPrice = allCombinedElements.filter(element =>
      priceRegex.test(element)
    )

    if (priceWhenOnItsOwnline.length > 0) return priceWhenOnItsOwnline[0]
    if (parsedPrice.length > 0) return parsedPrice[0]
    else return ""
  }

  // handle where there is just one line with price
  const priceLineIndex = findIndex(testData, line => {
    return line.match(priceRegex)
  })

  const price = getsPrice(testData)

  if (priceLineIndex > -1) testData.splice(priceLineIndex, 1)

  // handles the phone number
  const phoneLineIndex = findIndex(testData, line => line.match(phoneRegex))

  const getsPhoneNumber = (testData, phoneLineIndex) => {
    const phone = get(testData, phoneLineIndex, "")
    return phone ? phone.replace(/-/g, "") : ""
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
      // section handles when there is no postal code
      const cityAndProvinceNoPostalCode = testData.filter(line =>
        line.match(cityAndProvinceRegex)
      )
      if (cityAndProvinceNoPostalCode.length > 0)
        return cityAndProvinceNoPostalCode

      const provinceRegexWithExtraCharsAtEnd =
        /((AB|BC|SK|MB|ON|QC|N[BSTLU]|PE|YT|Alberta|ALBERTA|British Columbia|BRITISH COLUMBIA|Saskatchewan|SASKATCHEWAN|Manitoba|MANITOBA|Ontario|ONTARIO|Quebec|QUEBEC|New Brunswick|NEW BRUNSWICK|Nova Scotia|NOVA SCOTIA|Prince Edward Island|PRINCE EDWARD ISLAND|Newfoundland and Labrador|NEWFOUNDLAND AND LABRADOR|Nunavut|NUNAVUT|Northwest Territories|NORTHWEST TERRITORIES|Yukon|YUKON),? ?)[A-Za-z0-9 ]+,?/

      // returns city and province with a bad postcode
      const parsedCityAndProvinceLine = testData.filter(line => {
        const provExtraWordsCheck = provinceRegexWithExtraCharsAtEnd.test(line)
        if (provExtraWordsCheck)
          return line.match(provinceRegexWithExtraCharsAtEnd)
      })

      const provinceIndex = parsedCityAndProvinceLine[0].match(
        provinceRegexWithExtraCharsAtEnd
      ).index

      const parsedCityAndProvince = parsedCityAndProvinceLine[0]
        .split("")
        .splice(0, provinceIndex + 2)
        .join("")
      return [parsedCityAndProvince]

      // return the line where the city and province are but remove the bad postal code
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

  const getCityAndProvince = arrayOfLines => {
    const cityAndProvinceOnOwnLine = arrayOfLines.filter(line =>
      line.match(cityAndProvinceRegex)
    )
    if (cityAndProvinceOnOwnLine.length > 0) return cityAndProvinceOnOwnLine
    else return ""
  }

  const cityAndProvince = getCityAndProvince(testData)
  const cityAndProvinceSplit =
    cityAndProvince.length > 0 ? cityAndProvince : cityAndProvinceNoPostalCode

  // conditionally removes city and province from consideration
  if (cityAndProvinceSplit.length > 0) {
    testData.splice(cityIndex, 1)
  }

  // handles full name
  const [fullNameLine] = testData.filter(line => line.match(fullNameRegex))
  const [fullName] = fullNameLine ? fullNameLine.match(fullNameRegex) : ""
  const customerName = fullName ? fullName : ""

  const streetAddressWithCheck = streetAddress ? streetAddress : ""

  const handleCityAndProvince = cityAndProvinceArray => {
    // if city has two or more words
    if (cityAndProvinceArray.length > 2) {
      const cityProvCombined = cityAndProvinceArray.join(" ")
      return `${cityProvCombined}`
    } else {
      const cityWithCheck = cityAndProvinceArray[0]
        ? cityAndProvinceArray[0]
        : ""
      return `${cityWithCheck}`
    }
  }

  const cityProvCombined = handleCityAndProvince(cityAndProvinceSplit)

  const postalCodeCheck = postalIfOnItsOwnLine
    ? postalIfOnItsOwnLine
    : parsedPostalCode

  const customerAddress = `${streetAddressWithCheck}, ${cityProvCombined} ${postalCodeCheck}`
  const parsed = {
    price,
    customerPhone,
    customerAddress,
    customerName,
  }
  return parsed
}

console.log(classifyString(lines))
