// save reference to  important DOM elements
var timeDisplayEl = $("#time-display");
var dueDateInputEl = $("#due-date-input");
var projectNameInputEl = $("#project-name-input");
var projectTypeInputEl = $("#project-type-input");
var hourlyRateInputEl = $("#hourly-rate-input");
var projectDisplayEl = $("#project-display");
var projectFormEl = $("#project-form");
var projectModalEl = $("#project-modal");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("MMM Dd, YYY [at] hh:mm:ss a");
  //   console.log(rightNow);
  timeDisplayEl.text(rightNow);
}

//handle printing project date to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  // creating row element for the project
  var projectRowEl = $("<tr>");

  var projectNameTdEl = $("<td>").addClass("p-2").text(name);

  var projectTypeTdEl = $("<td>").addClass("p-2").text(type);

  var rateTdEl = $("<td>").addClass("p-2").text(hourlyRate);

  var dueDateTdEl = $("<td>").addClass("p-2").text(dueDate);

  var daysLeftTdEl = $("<td>").addClass("p-2").text(dueDate);

  var daysToDate = moment(dueDate, "MM/DD/YYYY").diff(moment(), "days");
  var daysLeftTdEl = $("<td>").addClass("p-2").text(daysToDate);

  var totalEarnings = calculateTOtalEarnings(hourlyRate, daysToDate);
  //   console.log(totalEarnings);

  var totalTdEl = $("<td>")
    .addClass("p-2")
    .text("$" + totalEarnings);
  console.log(totalTdEl);

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  projectRowEl.append(
    projectNameTdEl,
    projectTypeTdEl,
    rateTdEl,
    dueDateTdEl,
    daysLeftTdEl,
    totalTdEl
  );

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal("hide");
}

//function to calculate total Earnings
function calculateTOtalEarnings(rate, days) {
  var dailyTotal = rate * 8;
  //   console.log(dailyTotal);
  var total = dailyTotal * days;
  //   console.log(total);
  return total;
}

//handle project form submission
function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  console.log(projectName, projectType, hourlyRate, dueDate);

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  projectFormEl[0].reset();
}

projectFormEl.on("submit", handleProjectFormSubmit);
dueDateInputEl.datepicker({ mindDate: 1 });

setInterval(displayTime, 1000);
