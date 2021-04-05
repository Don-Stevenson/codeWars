const toCamelCase = str => {
  // set up camel case array to add
  let camelCaseStr = [];

  // if the string entered is empty, return an empty string
  if (str === "") {
    return "";
  }

  // c style loop that goes from 0 to the length of the string
  for (let i = 0; i < str.length; i++) {
    // if the instance of the string is either a space or a dash,
    // turn the next letter to upper case and add it to the camel case string
    if (str[i] === " " || str[i] === "-") {
      camelCaseStr.push(str[i + 1].toUpperCase());
      i++;

      // if the above conditions are not met,
      // add the the letter to the camel case string unaltered
    } else {
      camelCaseStr.push(str[i]);
    }
  }
  // turn the camel case array into a string, with no spaces or commas
  // return camelCaseStr.join("");

  // more complicated than join, change the array into a string,
  //replacing all the commas globally with no spaces ""
  return result = camelCaseStr.toString().replace(/,/gi, "");
};

console.log(toCamelCase("snakes on a plane"));
// expect : snakesOnAPlane