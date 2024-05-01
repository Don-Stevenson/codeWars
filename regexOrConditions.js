// Use the pipe symbol to indicate "or":

// /a@(foo|bar|baz)\b/
// If you don't want the capture-group, use the non-capturing grouping symbol:

// /a@(?:foo|bar|baz)\b/

const param = "fo"

const regexTest = /(?:foo|bar|baz)\b/

if (!param.match(regexTest)) {
  console.log("success!")
} else console.log("fail :(")
