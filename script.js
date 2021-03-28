const bodyElement = document.body;
const dateTime = document.getElementById("currentDay");

const getFromLocalStorage = () => {
  const schedule = localStorage.getItem("Nine");
  return schedule;
};

$(document).ready(function () {
  console.log("Ready");

  function update() {
    $("#currentDay").text(moment().format("dddd Do MMMM, HH:mm:ss"));
  }

  setInterval(update, 1000);
  $("#nine").text(getFromLocalStorage());
});

// Work on below. Would this work better with data attributes?
$("button").click(function () {
  const nine = document.querySelector("#nine").value;
  localStorage.setItem("Nine", nine);
  const ten = document.querySelector("#ten").value;
  localStorage.setItem("Ten", ten);
  const eleven = document.querySelector("#eleven").value;
  localStorage.setItem("Eleven", eleven);
  const twelve = document.querySelector("#twelve").value;
  localStorage.setItem("Twelve", twelve);
  const one = document.querySelector("#one").value;
  localStorage.setItem("One", one);
  const two = document.querySelector("#two").value;
  localStorage.setItem("Two", two);
  const three = document.querySelector("#three").value;
  localStorage.setItem("Three", three);
  const four = document.querySelector("#four").value;
  localStorage.setItem("Four", four);
  const five = document.querySelector("#five").value;
  localStorage.setItem("Five", five);

  console.log("Save");
});
