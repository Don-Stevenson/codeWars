const data = [
  {
    createdAt: "2020-07-29T02:24:48.174Z",
    date: "28-07-2020",
    driverFirstName: "Example1",
    driverLastName: "Lastname1",
    location: "123 Anywhere Ave. Toronto, On",
    startTime: "19:20",
    stopTime: "23:50",
    taskId: 4321,
    taskType: "Other (Lunch)",
    updatedAt: "2020-07-29T02:34:34.782Z",
    __v: 0,
    _id: "5f20ddf06cbe4e1c039f646f"
  },

  {
    createdAt: "2020-07-29T02:25:48.174Z",
    date: "28-07-2020",
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

const driverCSV = data => {
let dateStr = "29-07-20".split("-")
let month = parseInt(dateStr[1])

let day = parseInt(dateStr[0])
console.log(month, day)

};

driverCSV(data)