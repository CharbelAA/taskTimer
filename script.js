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
  // ADD HTML TO PAGE - TASK CONTAINER

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

  const currentTime = document.createElement("span");
  currentTime.classList.add("currentTime");
  currentTime.textContent = "00:00:00";

  const newIcon = document.createElement("i");
  newIcon.classList.add("fa-solid", "fa-stopwatch");

  const newReset = document.createElement("button");
  newReset.classList.add("reset");
  newReset.textContent = "Reset";

  // Append the elements to the new task element
  newTask.appendChild(newStartStop);
  newTask.appendChild(newTimer);
  newTimer.appendChild(currentTime);
  newTimer.appendChild(newIcon);
  newTask.appendChild(newDescription);
  newTask.appendChild(newReset);

  // Append the new task element to the task container
  taskContainer.appendChild(newTask);

  // ADD HTML TO PAGE - TASK CONTAINER - END

  activateTask(newStartStop, currentTime, newReset);
}

function activateTask(startStopTime, currentTime, resetTime) {
  let startTime;
  let intervalId;

  // need to switch the if else statement here or the user has to click twice to activate the button.

  // Listener on start-stop buttons
  startStopTime.addEventListener("click", (element) => {
    if (element.target.classList.contains("active")) {
      element.target.classList.remove("active");
      clearInterval(intervalId);
    } else if (!element.target.classList.contains("active")) {
      element.target.classList.add("active");
      startTime = Date.now();
      intervalId = setInterval(() => {
        update(startTime, currentTime);
      }, 10);
    }
  });
}

// function start() {
//   startTime = Date.now();
//   intervalId = setInterval(update, 10);
// }

function update(startTime, currenTime) {
  let elapsed = Date.now() - startTime;
  let hours = Math.floor(elapsed / 3600000);
  let minutes = Math.floor((elapsed % 3600000) / 60000);
  let seconds = ((elapsed % 60000) / 1000).toFixed(2);
  let display = `${hours}:${minutes}:${seconds}`;
  currenTime.innerHTML = display;
}

// function stop() {
//   clearInterval(intervalId);
// }

// function reset() {
//   if (running) return;
//   document.getElementById("stopwatch").textContent = "00:00.00";
// }

// resetTime.addEventListener("click", () => {
//   document.getElementById("stopwatch").textContent = "00:00.00";
// });
