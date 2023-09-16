// For task name validation
let taskName = document.getElementById("taskName"); //to get the task name
let taskNameError = document.getElementById("taskNameError"); //task name error div
let p = document.createElement("p"); //to create the paragraph element
let taskNameInputError = false; // for toggle the error display

// For task description validation

function addTask() {
  if (taskName.value == "") {
    taskNameInputError = true;
    taskName.classList.add("input-error");
    taskNameError.append(p);
    p.append("Please enter task name.");
    p.classList.add("error-font");
  }
}

addEventListener("input", (event) => {
  if (taskNameInputError) {
    taskName.classList.remove("input-error");
    taskNameError.remove(p);
    taskNameInputError = false;
  }
});
