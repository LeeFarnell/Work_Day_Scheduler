const nineEvent = localStorage.getItem("nine");
const tenEvent = localStorage.getItem("ten");
const elevenEvent = localStorage.getItem("eleven");
const twelveEvent = localStorage.getItem("twelve");
const oneEvent = localStorage.getItem("one");
const twoEvent = localStorage.getItem("two");
const threeEvent = localStorage.getItem("three");
const fourEvent = localStorage.getItem("four");
const fiveEvent = localStorage.getItem("five");

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

const renderTimeBlocksText = () => {
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

const onReady = () => {
  renderCurrentTime();

  renderTimeBlocks();

  renderTimeBlocksText();
};

$(document).ready(onReady);

$("#nineBtn").click(function () {
  const nine = $("#nine").val();
  localStorage.setItem("nine", nine);
});

$("#tenBtn").click(function () {
  const ten = $("#ten").val();
  localStorage.setItem("ten", ten);
});

$("#elevenBtn").click(function () {
  const eleven = $("#eleven").val();
  localStorage.setItem("eleven", eleven);
});

$("#twelveBtn").click(function () {
  const twelve = $("#twelve").val();
  localStorage.setItem("twelve", twelve);
});

$("#oneBtn").click(function () {
  const one = $("#one").val();
  localStorage.setItem("one", one);
});

$("#twoBtn").click(function () {
  const two = $("#two").val();
  localStorage.setItem("two", two);
});

$("#threeBtn").click(function () {
  const three = $("#three").val();
  localStorage.setItem("three", three);
});

$("#fourBtn").click(function () {
  const four = $("#four").val();
  localStorage.setItem("four", four);
});

$("#fiveBtn").click(function () {
  const five = $("#five").val();
  localStorage.setItem("five", five);
});
