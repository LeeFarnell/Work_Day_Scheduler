const bodyElement = document.body;
const dateTime = document.getElementById("currentDay");

$(document).ready(function () {
  console.log("Ready");

  function update() {
    $("#currentDay").text(moment().format("dddd Do MMMM, HH:mm:ss"));
  }

  setInterval(update, 1000);
});

$("button").click(function () {
  console.log("Save");
});
