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

  console.log(newStartStop, currentTime, newReset);

  activateTask(newStartStop, currentTime, newReset);
}

function activateTask(startStopTime, currentTime, resetTime) {
  let startTime;
  let intervalId;
  let stopwatch;

  // Listener on start-stop buttons
  startStopTime.addEventListener("click", (element) => {
    if (!element.target.classList.contains("stopRunning")) {
      element.target.classList.add("stopRunning");
      clearInterval(intervalId);
    } else {
      element.target.classList.remove("stopRunning");

      // start timer
      startTime = Date.now();
      intervalId = setInterval(() => {
        update(startTime, currentTime);
      }, 10);

      //
    }
  });

  resetTime.addEventListener("click", () => {
    stopwatch = reset(currenTime);
  });
}

function start() {
  startTime = Date.now();
  intervalId = setInterval(update, 10);
}

function update(startTime, currenTime) {
  let elapsed = Date.now() - startTime;
  let minutes = Math.floor(elapsed / 60000);
  let seconds = ((elapsed % 60000) / 1000).toFixed(3);
  let display = `${minutes}:${seconds}`;
  currenTime.innerHTML = display;
}

function stop() {
  clearInterval(intervalId);
}

function reset() {
  if (running) return;
  document.getElementById("stopwatch").textContent = "00:00.000";
}
