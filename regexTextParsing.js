import pkg from "lodash"
const { findIndex, get } = pkg

// Ignore some fields that always show up on labels
const shouldIgnore = line =>
  !line ||
  line.match(/Tx:/) ||
  line.match(/Rx(:?)/) ||
  line.match(/Re(f|t)ill(s?):/) ||
  line.match(/Date:/)

// regexes used
const priceRegex = /^\$?[0-9]+(\.[0-9][0-9])?$/
const phoneRegex = /(\(?)\d{3}(\)?)(-?|\s?)\d{3}(-?|\s?)\d{4}/
const postalCodeRegex = /[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/
const firstPartOfPostalCodeRegex = /[A-Z][0-9][A-Z]/
const streetAddressRegex = /\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+/g
const cityAndProvinceRegex =
  /^[A-Za-z ]+,? ?((AB|BC|SK|MB|ON|QC|N[BSTLU]|PE|YT|Alberta|ALBERTA|British Columbia|BRITISH COLUMBIA|Saskatchewan|SASKATCHEWAN|Manitoba|MANITOBA|Ontario|ONTARIO|Quebec|QUEBEC|New Brunswick|NEW BRUNSWICK|Nova Scotia|NOVA SCOTIA|Prince Edward Island|PRINCE EDWARD ISLAND|Newfoundland and Labrador|NEWFOUNDLAND AND LABRADOR|Nunavut|NUNAVUT|Northwest Territories|NORTHWEST TERRITORIES|Yukon|YUKON),? ?)$/
const provinceRegexWithExtraCharsAtEnd =
  /((AB|BC|SK|MB|ON|QC|N[BSTLU]|PE|YT|Alberta|ALBERTA|British Columbia|BRITISH COLUMBIA|Saskatchewan|SASKATCHEWAN|Manitoba|MANITOBA|Ontario|ONTARIO|Quebec|QUEBEC|New Brunswick|NEW BRUNSWICK|Nova Scotia|NOVA SCOTIA|Prince Edward Island|PRINCE EDWARD ISLAND|Newfoundland and Labrador|NEWFOUNDLAND AND LABRADOR|Nunavut|NUNAVUT|Northwest Territories|NORTHWEST TERRITORIES|Yukon|YUKON),? ?)[A-Za-z0-9 ]+,?/
const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+ ?-?[a-zA-Z]+$/

// this section handles the price
const handleParsedPriceLineWithoutColonAndAddress = line =>
  line.length > 0 ? line[0].split(":")[1].trim() : ""

const choosePrice = (
  parsedPriceWithoutColonAndAddress,
  priceWhenOnItsOwnline,
  parsedPrice
) => {
  console.log({ parsedPrice })
  if (parsedPriceWithoutColonAndAddress)
    return parsedPriceWithoutColonAndAddress
  if (priceWhenOnItsOwnline.length > 0) return priceWhenOnItsOwnline[0]
  if (parsedPrice.length > 0) return parsedPrice[0]
  else return ""
}

const getsPrice = arrayOfLines => {
  // filter the address out, then return the index of the address within array of lines
  const linesWithoutAddress = arrayOfLines.filter(
    line => !line.match(streetAddressRegex)
  )

  const priceWhenOnItsOwnline = arrayOfLines.filter(line => {
    priceRegex.test(line)
  })

  const parsedPriceLineWithoutColonAndAddress = linesWithoutAddress.filter(
    line => line.indexOf(":") !== -1
  )
  console.log({ parsedPriceLineWithoutColonAndAddress })

  const parsedPriceWithoutColonAndAddress =
    handleParsedPriceLineWithoutColonAndAddress(
      parsedPriceLineWithoutColonAndAddress
    )
  console.log({ parsedPriceWithoutColonAndAddress })
  console.log({ priceWhenOnItsOwnline })

  // if price priceWhenOnItsOwnline contains a string after number, not the price, splice out the not price line from array of lines
  // if price is not on its own line
  const allCombinedElements = linesWithoutAddress
    .map(line => line.split(" "))
    .join()
    .split(",")

  console.log({ allCombinedElements })
  const parsedPrice = allCombinedElements.filter(element =>
    priceRegex.test(element)
  )

  const price = choosePrice(
    parsedPriceWithoutColonAndAddress,
    priceWhenOnItsOwnline,
    parsedPrice
  )

  if (price[0] === "$") return price.substring(1)
  return price
}

const getsPhoneNumber = (lines, phoneLineIndex) => {
  const phone = get(lines, phoneLineIndex, "")
  return phone ? phone.match(/\d/g).join("") : ""
}

const checkPostalCodeOwnLine = (postalCodeLine, postalCodeLineIndex, lines) => {
  if (!postalCodeLine) return ""
  if (postalCodeLine.length === 7) {
    return lines.splice(postalCodeLineIndex, 1)
  } else return ""
}

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

// this section handles the address
const removesPostalCodeFromAddress = (
  postalCodeLine,
  lines,
  parsedPostalCode
) => {
  if (!postalCodeLine) {
    // this handles when there is no postal code
    const cityAndProvinceNoPostalCode = lines.filter(line =>
      line.match(cityAndProvinceRegex)
    )
    if (cityAndProvinceNoPostalCode.length > 0)
      return cityAndProvinceNoPostalCode

    // returns city and province without a bad postcode
    const parsedCityAndProvinceLine = lines.filter(line => {
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

  // remove this check?
  if (postalCodeLine) {
    const addressArray = postalCodeLine.split(" ")
    const postalCodeArray = parsedPostalCode.split(" ")
    return addressArray.filter(item => !postalCodeArray.includes(item))
  }
}

const getCityAndProvince = arrayOfLines => {
  const cityAndProvinceOnOwnLine = arrayOfLines.filter(line =>
    line.match(cityAndProvinceRegex)
  )
  if (cityAndProvinceOnOwnLine.length > 0) return cityAndProvinceOnOwnLine
  else return ""
}

// returns name in a line with other text that includes a colon (:)
const handleName = (arrayOfLines, fullName) => {
  if (!fullName) {
    // if (fullName === undefined) return ""
    const parsedName = arrayOfLines.filter(
      line => line.indexOf(":") !== -1 && line.indexOf("$") === -1
    )
    if (parsedName[0]) return parsedName[0].split(":")[1].trim()
    else return ""
  } else return fullName.trim()
}

const handleCityAndProvince = cityAndProvinceArray => {
  // handle when city has two or more words
  if (cityAndProvinceArray.length > 2) {
    const cityProvCombined = cityAndProvinceArray.join(" ")
    return `${cityProvCombined}`
  } else {
    const cityWithCheck = cityAndProvinceArray[0] || ""
    return `${cityWithCheck}`
  }
}

const parseLabel = (text = "") => {
  const lines = text.split("\n").filter(line => !shouldIgnore(line))
  console.log({ lines })
  // this section handles the phone number
  const phoneLineIndex = findIndex(lines, line => line.match(phoneRegex))
  const customerPhone = getsPhoneNumber(lines, phoneLineIndex)

  if (customerPhone) {
    lines.splice(phoneLineIndex, 1)
  }

  // handle where there is just one line with price
  const priceLineIndex = findIndex(lines, line => {
    line.match(priceRegex)
  })

  const price = getsPrice(lines)

  if (priceLineIndex > -1) lines.splice(priceLineIndex, 1)

  // this section handles the postal code
  const [postalCodeLine] = lines.filter(line => line.match(postalCodeRegex))

  const postalCodeLineIndex = findIndex(lines, line =>
    line.match(postalCodeRegex)
  )

  const postalIfOnItsOwnLine = checkPostalCodeOwnLine(
    postalCodeLine,
    postalCodeLineIndex,
    lines
  )

  const parsedPostalCode = getsPostalCode(postalCodeLine)

  const cityAndProvinceNoPostalCode = removesPostalCodeFromAddress(
    postalCodeLine,
    lines,
    parsedPostalCode
  )

  // this section handles the street address
  const [streetLine] = lines.filter(line => line.match(streetAddressRegex))
  const [streetAddress] = streetLine ? streetLine.match(streetAddressRegex) : ""
  const streetIndex = findIndex(lines, line => line.match(streetAddressRegex))

  // conditionally removes street address
  if (cityAndProvinceNoPostalCode || streetLine.length > 0) {
    lines.splice(streetIndex, 1)
  }

  const cityIndex = findIndex(lines, line => {
    line.match(cityAndProvinceRegex)
  })

  const cityAndProvince = getCityAndProvince(lines)
  const cityAndProvinceSplit =
    cityAndProvince.length > 0 ? cityAndProvince : cityAndProvinceNoPostalCode

  // conditionally removes city and province from consideration
  if (cityAndProvinceSplit.length > 0) {
    lines.splice(cityIndex, 1)
  }

  // this section handles full name
  const [fullNameLine] = lines.filter(line => line.match(fullNameRegex))
  const [fullName] = fullNameLine ? fullNameLine.match(fullNameRegex) : ""
  const customerName = handleName(lines, fullName)

  // this section returns the final valiues
  const streetAddressWithCheck = streetAddress || ""
  const cityProvCombined = handleCityAndProvince(cityAndProvinceSplit)
  const postalCodeWithCheck = postalIfOnItsOwnLine || parsedPostalCode
  const customerAddress =
    `${streetAddressWithCheck}, ${cityProvCombined} ${postalCodeWithCheck}`.trim()

  const parsed = {
    price,
    customerPhone,
    customerAddress,
    customerName,
  }
  return parsed
}

const lines = `"$28\nSam Barr\n123 ANYWHERE STREET\nDate Apr 23 2020\nKING CITY, ON M6J 2G4\n416123456\nH\nTx: 1232728839\nRefile:0\n"`

console.log(parseLabel(lines))
