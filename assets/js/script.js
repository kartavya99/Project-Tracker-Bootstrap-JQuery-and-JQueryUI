// save reference to  important DOM elements
var timeDisplayEl = $("#time-display");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("MMM Dd, YYY [at] hh:mm:ss a");
  //   console.log(rightNow);
  timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);
