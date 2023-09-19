const { fi } = require("date-fns/locale")
const { add } = require("lodash")
const findIndex = require("lodash/findIndex")
const get = require("lodash/get")
const { index } = require("mathjs")
// /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(\.)?(\w*)?(\.)?(\s*\d{0,2}\s*),(\s*\d{4})/
// return what kind of data it is
const lines = [
  "JA",
  "Sheetal Jaitly",
  "42 B MORGAN AVE",
  "416-908-9995",
  "ETOBICOKE, ON",
  "Date Sep 10 2020 M67 2G4",
  "$20.00",
]
const classifyString = testData => {
  // Find price and remove it from consideration
  console.log("Coming in", { testData })

  const [priceLine] = testData.filter(line => line.match(/(?<=\$)\d+\.\d+/))
  const getsPrice = line => {
    const [price] = line ? line.match(/(?<=\$)\d+\.\d+/).slice(0) : ""
    return price
  }
  const priceLineIndex = findIndex(priceLine, line =>
    line.match(/(?<=\$)\d+\.\d+/)
  )

  const price = getsPrice(priceLine)
  console.log({ price })
  // todo: move slices to after calling the functions
  // removes price line
  testData.splice(priceLineIndex, 1)
  console.log("test data after price removed", testData)

  // Find phone and remove it from consideration
  const phoneLineIndex = findIndex(testData, line =>
    line.match(/(\(?)\d{3}(\)?)(-?|\s?)\d{3}(-?|\s?)\d{4}/)
  )

  const getsPhoneNumber = (testData, phoneLineIndex) => {
    const phone = get(testData, phoneLineIndex, "")
    return phone ? phone.replace(/-/g, "") : ""
  }
  const customerPhone = getsPhoneNumber(testData, phoneLineIndex)
  console.log(customerPhone)

  testData.splice(phoneLineIndex, 1)
  console.log("test data after phone removed", testData)

  // Find postal code and remove it from consideration
  const [postalCodeLine] = testData.filter(line =>
    line.match(/[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/)
  )
  const postalCodeLineIndex = findIndex(testData, line =>
    line.match(/[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/)
  )

  //find address herewithoutpostalcode

  // let postalCode = ""
  // let remainingAddress = ""

  // NOTE: handle undefined postal code
  // if (postalCodeLineIndex !== -1) {
  // find postal code index within the postalCodeLine

  const getsPostalCode = postalCodeLine => {
    if (postalCodeLine) {
      const addressArray = postalCodeLine.split(" ")
      const postalCodeFirstHalfIndex = findIndex(addressArray, line =>
        line.match(/[A-Z][0-9][A-Z]/)
      )
      const postalCode = `${addressArray[postalCodeFirstHalfIndex]} ${
        addressArray[postalCodeFirstHalfIndex + 1]
      }`
      return postalCode
    } else return ""
  }

  console.log("Here getPostalCode", getsPostalCode(postalCodeLine))

  const postalCode = getsPostalCode(postalCodeLine)

  const cityAndProvinceRegex =
    /^[A-Za-z ]+,? ?((AB|BC|SK|MB|ON|QC|N[BSTLU]|PE|YT|Alberta|ALBERTA|British Columbia|BRITISH COLUMBIA|Saskatchewan|SASKATCHEWAN|Manitoba|MANITOBA|Ontario|ONTARIO|Quebec|QUEBEC|New Brunswick|NEW BRUNSWICK|Nova Scotia|NOVA SCOTIA|Prince Edward Island|PRINCE EDWARD ISLAND|Newfoundland and Labrador|NEWFOUNDLAND AND LABRADOR|Nunavut|NUNAVUT|Northwest Territories|NORTHWEST TERRITORIES|Yukon|YUKON),? ?)$/
  const [cityAndProvLine] = testData.filter(line => {
    console.log({ line })
    return line.match(cityAndProvinceRegex)
  })

  const removesPostCodeFromAddressArrayIfPostalCodeExists = postalCodeLine => {
    if (postalCodeLine) {
      const addressArray = postalCodeLine.split(" ")
      const postalCodeFirstHalfIndex = findIndex(addressArray, line =>
        line.match(/[A-Z][0-9][A-Z]/)
      )
      console.log({ postalCodeFirstHalfIndex })
      // modify such that the entire address is not deleted, only the postal code
      console.log({ addressArray })
      console.log("here", postalCodeFirstHalfIndex + 1)
      const addressArrayWithFirstHalfOfPostalCodeRemoved = addressArray.filter(
        (element, index) => {
          return index !== postalCodeFirstHalfIndex
        }
      )
      const addressArrayWithOutPostalCode =
        addressArrayWithFirstHalfOfPostalCodeRemoved.filter(
          (element, index) => {
            return index !== postalCodeFirstHalfIndex
          }
        )
      console.log({ addressArrayWithOutPostalCode })
      return addressArrayWithOutPostalCode.join("")
    } else return cityAndProvLine
  }

  const streetAddressWithNeverAPostalCode =
    removesPostCodeFromAddressArrayIfPostalCodeExists(postalCodeLine)
  console.log({ streetAddressWithNeverAPostalCode })
  // need to remove postal code
  //

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
  console.log({ streetAddress })

  // TODO: Find city and province, and remove it from consideration

  console.log({ cityAndProvLine })
  console.log(
    "line 128",
    removesPostCodeFromAddressArrayIfPostalCodeExists(postalCodeLine)
  )

  const cityIndex = findIndex(testData, line => {
    return line.match(cityAndProvinceRegex)
  })
  console.log({ cityIndex })
  const cityAndProvince =
    removesPostCodeFromAddressArrayIfPostalCodeExists(postalCodeLine)

  console.log({ cityAndProvince })
  // remove citylineFrom Consideration
  testData.splice(cityIndex, 1)

  console.log("test data after city removed", testData)

  // TODO: Find name and remove it from consideration
  // update to datawithOutPostal code instead of filter
  const [fullNameLine] = testData.filter(line =>
    line.match(/^[a-zA-Z]+ [a-zA-Z]+ ?-?[a-zA-Z]+$/)
  )
  console.log({ fullNameLine })
  const fullNameIndex = findIndex(testData, line =>
    line.match(/^[a-zA-Z]+ [a-zA-Z]+ ?-?[a-zA-Z]+$/)
  )
  const [customerName] = fullNameLine
    ? fullNameLine.match(/^[a-zA-Z]+ [a-zA-Z]+ ?-?[a-zA-Z]+$/)
    : ""
  console.log({ customerName })
  testData.splice(fullNameIndex, 1)

  console.log("testData after splice after name removed", testData)

  // clean up the following

  // TODO: concat streetAddress, city and postal code
  // TODO: if postal code is there, concat it to address
  const customerAddress = `${
    streetAddress ? streetAddress : remainingAddress
  } ${cityAndProvince} ${postalCode}`

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
