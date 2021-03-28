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
  const nine = document.querySelector("#nine").value;
  const ten = document.querySelector("#ten").value;
  const eleven = document.querySelector("#eleven").value;

  const schedule = [nine, ten, eleven];

  localStorage.setItem("Event", schedule);

  console.log("Save");
});
