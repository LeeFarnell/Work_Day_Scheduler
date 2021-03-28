const bodyElement = document.body;
const dateTime = document.getElementById("currentDay");

$(document).ready(function () {
  console.log("Ready");

  dateTime.append(moment().format("dddd Do MMMM, HH:mm:ss"));
});
