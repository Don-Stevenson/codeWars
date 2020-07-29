const data = [
  {
    createdAt: "2020-07-29T02:24:48.174Z",
    date: "01-05-2020",
    driverFirstName: "Example1",
    driverLastName: "Lastname1",
    location: "123 Anywhere Ave. Toronto, On",
    startTime: "19:20",
    stopTime: "23:50",
    taskId: 4321,
    taskType: "Other",
    updatedAt: "2020-07-29T02:34:34.782Z",
    __v: 0,
    _id: "5f20ddf06cbe4e1c039f646f"
  },
  {
    createdAt: "2020-07-29T02:24:48.174Z",
    date: "01-01-2020",
    driverFirstName: "Example1",
    driverLastName: "Lastname1",
    location: "12345 Anywhere Ave. Toronto, On",
    startTime: "19:20",
    stopTime: "23:50",
    taskId: 2222,
    taskType: "Pick Up",
    updatedAt: "2020-07-29T02:34:34.782Z",
    __v: 0,
    _id: "5f20ddf06cbe4e1c039f646f"
  },

  {
    createdAt: "2020-07-29T02:25:48.174Z",
    date: "07-28-2020",
    driverFirstName: "Example1",
    driverLastName: "Lastname2",
    location: "123 Anystreet St. Toronto, On",
    startTime: "12:20",
    stopTime: "14:35",
    taskId: 1234,
    taskType: "Drop Off",
    updatedAt: "2020-07-29T02:34:35.782Z",
    __v: 0,
    _id: "5f20ddf06cbe4e1c039f646h"
  }
];

// const isToday = require('date-fns/is_today')
const { getDayOfYear } = require("date-fns");
// console.log(getDayOfYear(Date.parse("02-28-2020")))

const makeDurationObj = interval => {
  const iterator = 365 - interval;
  const objectArr = [];
  for (let i = 1; i <= iterator; i += interval) {
    const durationObj = {
      duration: `Day ${i} - Day ${i + interval}`,
      pickUp: 0,
      dropOff: 0,
      other: 0,
      start: i,
      end: i + interval
    };

    objectArr.push(durationObj);
  }
  return objectArr;
};

const updateDurationObj = (interval, durationObj, taskList) => {
  // console.log("in durationobj")
  taskList.forEach(element => {
    const dayOfYear = getDayOfYear(Date.parse(element.date));

    for (let i = 0; i < durationObj.length; i++) {
      // console.log("in loop")
      if (
        dayOfYear >= durationObj[i].start &&
        dayOfYear < durationObj[i].end
      ) {
        switch (element.taskType) {
          case "Pick Up":
            durationObj[i].pickUp += 1;
            break;
          case "Drop Off":
            durationObj[i].dropOff += 1;
            break;
          case "Other":
            durationObj[i].other += 1;
        }
      }
    }
    // console.log(index, dayOfYear);
  });
};

// console.log(makeDurationObj(28))

const driverCSV = (data, driverLastName, dateInterval) => {
  const driverTasks = data
    .filter(currentTask => {
      // console.log(currentTask.driverLastName)
      return currentTask.driverLastName === driverLastName;
    })
    .sort((task1, task2) => Date.parse(task1.date) - Date.parse(task2.date));
  const durationObj = makeDurationObj(2);
  updateDurationObj(2, durationObj, driverTasks);
  console.log(durationObj);

  //console.log (Date.parse("07-29-2020"))
  // console.log(driverTasks)
  const dateStr = "29-07-2020".split("-");

  const month = parseInt(dateStr[1]);

  const day = parseInt(dateStr[0]);
  // console.log(month, day)
};

driverCSV(data, "Lastname1");
