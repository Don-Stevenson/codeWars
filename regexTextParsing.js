import pkg from "lodash"
const { findIndex, get } = pkg

// Ignore some fields that always show up on labels
const shouldIgnore = line =>
  !line ||
  line.match(/Tx:/) ||
  line.match(/Re(f|t)ill(s?):/) ||
  line.match(/Date:/)

// regexes used
const priceRegex = /^\$[0-9]+(\.[0-9][0-9])?$/ // note: price regex requires a dollar sign to pass
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

const lines =
  "Patient Pays: $28.83\nSend to: Jane Doe\n18 KING ROAD\nJOKER CITY, ON\n123-456-7890\nDate Apr 23 2020\nH\nTx: 1827407923839\nRefill:0\n"

function parseLabel(text = "") {
  const lines = text.split("\n").filter(line => !shouldIgnore(line))
  // handle where there is just one line with price
  const priceLineIndex = findIndex(lines, line => {
    return line.match(priceRegex)
  })

  const price = getsPrice(lines).substring(1)

  if (priceLineIndex > -1) lines.splice(priceLineIndex, 1)

  // this section handles the phone number
  const phoneLineIndex = findIndex(lines, line => line.match(phoneRegex))

  const customerPhone = getsPhoneNumber(lines, phoneLineIndex)

  if (customerPhone) {
    lines.splice(phoneLineIndex, 1)
  }

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
    return line.match(cityAndProvinceRegex)
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

console.log(parseLabel(lines))
