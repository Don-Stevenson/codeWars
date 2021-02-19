// function that turns a number of seconds into hour,
//  min and sec format
// needs refactoring on the logic of mins, secs,
// hours, but produces the requires and passes
const date = new Date().toLocaleDateString("en-US", {weekday: "long", day: "numeric", month: "long"});
console.log({ date });

const humanReadable = (seconds) => {
  let mins = Math.floor(seconds / 60);
  let hours = Math.floor(mins / 60);
  let minRemain = mins - hours * 60;
  let secsRemain = seconds - mins * 60;

  if (minRemain < 10) {
    minRemain = `0${minRemain}`;
  }
  if (secsRemain < 10) {
    secsRemain = `0${secsRemain}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${hours}:${minRemain}:${secsRemain}`;
};
console.log(humanReadable(30021));
