// Retrieve data from local storage.
const nineEvent = localStorage.getItem("Nine");
const tenEvent = localStorage.getItem("Ten");
const elevenEvent = localStorage.getItem("Eleven");
const twelveEvent = localStorage.getItem("Twelve");
const oneEvent = localStorage.getItem("One");
const twoEvent = localStorage.getItem("Two");
const threeEvent = localStorage.getItem("Three");
const fourEvent = localStorage.getItem("Four");
const fiveEvent = localStorage.getItem("Five");

const renderCurrentTime = () => {
  const update = () => {
    $("#currentDay").text(moment().format("dddd Do MMMM, HH:mm:ss"));
  };
  setInterval(update, 1000);
};

const renderTimeBlocks = () => {
  const timeBlocks = $(".container .row");

  const callback = function () {
    const timeBlockTime = $(this).data("time");
    const currentHour = moment().hour();

    if (timeBlockTime === currentHour) {
      $(this).find("textarea").removeClass("past").addClass("present");
    }
    if (timeBlockTime > currentHour) {
      $(this).find("textarea").removeClass("past").addClass("future");
    }
  };

  timeBlocks.each(callback);
};

const onReady = function () {
  renderCurrentTime();

  renderTimeBlocks();

  $("#nine").text(nineEvent);
  $("#ten").text(tenEvent);
  $("#eleven").text(elevenEvent);
  $("#twelve").text(twelveEvent);
  $("#one").text(oneEvent);
  $("#two").text(twoEvent);
  $("#three").text(threeEvent);
  $("#four").text(fourEvent);
  $("#five").text(fiveEvent);
};

$(document).ready(onReady);

// Event listeners for each save button. Each button saves respective hour.
$("#nineBtn").click(function () {
  const nine = $("#nine").val();
  localStorage.setItem("Nine", nine);
});

$("#tenBtn").click(function () {
  const ten = $("#ten").val();
  localStorage.setItem("Ten", ten);
});

$("#elevenBtn").click(function () {
  const eleven = $("#eleven").val();
  localStorage.setItem("Eleven", eleven);
});

$("#twelveBtn").click(function () {
  const twelve = $("#twelve").val();
  localStorage.setItem("Twelve", twelve);
});

$("#oneBtn").click(function () {
  const one = $("#one").val();
  localStorage.setItem("One", one);
});

$("#twoBtn").click(function () {
  const two = $("#two").val();
  localStorage.setItem("Two", two);
});

$("#threeBtn").click(function () {
  const three = $("#three").val();
  localStorage.setItem("Three", three);
});

$("#fourBtn").click(function () {
  const four = $("#four").val();
  localStorage.setItem("Four", four);
});

$("#fiveBtn").click(function () {
  const five = $("#five").val();
  localStorage.setItem("Five", five);
});
