// For task name validation
let taskName = document.getElementById("taskName"); //to get the task name
let taskNameError = document.getElementById("taskNameError"); //task name error div
let taskNameErrorParagraph = document.createElement("p"); //to create the paragraph element
let taskNameInputError = false; // for toggle the error display in task name

let taskDescription = document.getElementById("taskDescription"); //to get the task description
let taskDescriptionError = document.getElementById("taskDescriptionError"); //task description error div
let taskDescriptionErrorParagraph = document.createElement("p"); //to create the paragraph element
let taskDescriptionInputError = false;

// For task description validation

function addTask() {
  if (taskName.value == "") {
    taskNameInputError = true;
    taskName.classList.add("input-error");
    taskNameError.append(taskNameErrorParagraph);
    taskNameErrorParagraph.append("Please enter task name.");
    taskNameErrorParagraph.classList.add("error-font");
  }

  if (taskDescription.value == "") {
    taskDescriptionInputError = true;
    taskDescription.classList.add("input-error");
    taskDescriptionError.append(taskDescriptionErrorParagraph);
    taskDescriptionErrorParagraph.append("Please write task description.");
    taskDescriptionErrorParagraph.classList.add("error-font");
  }
}

addEventListener("input", (event) => {
  if (taskNameInputError) {
    taskName.classList.remove("input-error");
    taskNameError.remove(p);
    taskDescriptionError.remove(p);
    taskNameInputError = false;
    taskDescriptionInputError = false;
  }
});
