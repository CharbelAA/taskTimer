const addTaskBtn = document.querySelector("#addTaskBtn");

addTaskBtn.addEventListener("click", () => {
  addTask(description());
  clearDescription();
});

function description() {
  return document.getElementById("taskInput").value;
}
function clearDescription() {
  document.getElementById("taskInput").value = "";
}

function addTask(description) {
  const taskContainer = document.getElementById("taskContainer");

  // Create a new task element
  const newTask = document.createElement("div");
  newTask.classList.add("task");

  // Create the elements within the task element
  const newStartStop = document.createElement("button");
  newStartStop.classList.add("start-stop");
  newStartStop.textContent = "Start/Stop";

  const newDescription = document.createElement("span");
  newDescription.classList.add("description");
  newDescription.textContent = description;

  const newTimer = document.createElement("span");
  newTimer.classList.add("timer");
  newTimer.textContent = "00:00:00";

  const newIcon = document.createElement("i");
  newIcon.classList.add("fa-solid", "fa-stopwatch");

  const newReset = document.createElement("button");
  newReset.classList.add("reset");
  newReset.textContent = "Reset";

  // Append the elements to the new task element
  newTask.appendChild(newStartStop);
  newTask.appendChild(newTimer);
  newTimer.appendChild(newIcon);
  newTask.appendChild(newDescription);
  newTask.appendChild(newReset);

  // Append the new task element to the task container
  taskContainer.appendChild(newTask);
}

function eventListenerTimer() {
  while (document.querySelectorAll(".start-stop")[0] != null) {
    document.querySelectorAll(".start-stop").forEach((element) => {
      element.addEventListener("click", console.log("hello"));
    });
  }
}

function timer() {
  console.log("Hello");
}
