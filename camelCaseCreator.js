const toCamelCase = (str) => {
  let camelCaseStr = []
  if (str === "") {
    return ""
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "-") {
      camelCaseStr.push(str[i + 1].toUpperCase())
      i++;
    } else {
      camelCaseStr.push(str[i])
    }

  }
  return result = camelCaseStr.toString().replace(/,/gi, "")
};