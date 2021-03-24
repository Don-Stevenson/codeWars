// Function that turns a number of seconds into hour,
// min and sec format
// *************************************************

// Notes: needs refactoring on the logic of mins, secs,
// hours, but produces the requires and passes
const date = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
});
console.log({ date });

const humanReadable = (seconds) => {
  const mins = Math.floor(seconds / 60);
  let hours = Math.floor(mins / 60);
  let minRemain = mins - hours * 60;
  let secsRemain = seconds - mins * 60;

  minRemain < 10 ? (minRemain = `0${minRemain}`) : minRemain;
  secsRemain < 10 ? (secsRemain = `0${secsRemain}`) : secsRemain;
  hours < 10 ? (hours = `0${hours}`) : hours;

  return `${hours}:${minRemain}:${secsRemain}`;
};
console.log(humanReadable(30021));
// expect 
// { date: 'Wednesday, March 24' }
// 08:20:21