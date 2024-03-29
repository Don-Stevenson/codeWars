//only returns the domain name, google, from https://google.com or other variations
// ********************************************************************************
const domainName = url => {
  const domainName = url.split("//").pop().split(".")
  return domainName[0] === "www" ? domainName[1] : domainName[0]
}

console.log(domainName("https://google.com")) // => google

console.log(domainName("www.google.com")) // => google
