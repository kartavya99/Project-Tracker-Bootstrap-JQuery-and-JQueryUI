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

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  projectRowEl.append(projectNameTdEl, projectTypeTdEl, rateTdEl, dueDateTdEl);

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal("hide");
}

//handle project form submission
function handleProjectFormSubmit(e) {
  e.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  console.log(projectName, projectType, hourlyRate, dueDate);

  printProjectData(projectName, projectType, hourlyRate, dueDate);
}

projectFormEl.on("submit", handleProjectFormSubmit);
dueDateInputEl.datepicker({ mindDate: 1 });

setInterval(displayTime, 1000);
