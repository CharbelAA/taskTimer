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

  const resetBtn = document.createElement("button");
  resetBtn.classList.add("reset");
  resetBtn.textContent = "Reset";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "🗑";

  // Append the elements to the new task element
  newTask.appendChild(newStartStop);
  newTask.appendChild(newTimer);
  newTimer.appendChild(currentTime);
  newTimer.appendChild(newIcon);
  newTask.appendChild(newDescription);
  newTask.appendChild(resetBtn);
  newTask.appendChild(deleteBtn);

  // Append the new task element to the task container
  taskContainer.appendChild(newTask);

  // ADD HTML TO PAGE - TASK CONTAINER - END

  activateTask(newStartStop, currentTime, resetBtn, deleteBtn);
}

function activateTask(startStopTime, currentTime, resetBtn, deleteBtn) {
  let startTime;
  let intervalId;

  // need to switch the if else statement here or the user has to click twice to activate the button.

  // Listener on start-stop buttons
  startStopTime.addEventListener("click", (element) => {
    let previousElapsedTime = startStopTime.getAttribute("previous-time");

    if (element.target.classList.contains("active")) {
      element.target.classList.remove("active");
      startStopTime.setAttribute("previous-time", Date.now() - startTime);
      clearInterval(intervalId);
    } else if (!element.target.classList.contains("active")) {
      element.target.classList.add("active");

      if (previousElapsedTime == null) {
        startTime = Date.now();

        intervalId = setInterval(() => {
          update(startTime, currentTime);
        }, 10);
      } else if (previousElapsedTime !== null) {
        startTime = Date.now() - previousElapsedTime;
        intervalId = setInterval(() => {
          update(startTime, currentTime);
        }, 10);
      }
    }
  });

  resetBtn.addEventListener("click", () => {
    //DO A STOP BEFORE RESETTING
    startStopTime.classList.remove("active");
    startStopTime.setAttribute("previous-time", Date.now() - startTime);
    clearInterval(intervalId);
    //DO A STOP
    startStopTime.removeAttribute("previous-time");
    currentTime.innerHTML = "00:00:00";
  });

  deleteBtn.addEventListener("click", () => {
    removeTask(resetBtn.parentElement);
  });
}

function update(startTime, currenTime) {
  let elapsed = Date.now() - startTime;
  let hours = Math.floor(elapsed / 3600000);
  let minutes = Math.floor((elapsed % 3600000) / 60000);
  let seconds = ((elapsed % 60000) / 1000).toFixed(2);
  let display = `${hours}:${minutes}:${seconds}`;
  currenTime.innerHTML = display;
}

function removeTask(task) {
  task.remove();
}
