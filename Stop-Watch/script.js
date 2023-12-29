let timer; 
let hours = 0;
let minutes = 0;
let seconds = 0;
function updateDisplay() {
  document.getElementById("display").textContent = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number.toString().padStart(2, "0");
}

function startStop() {
  const button = document.getElementById("startStopButton");

  if (timer) {
    // If timer exists, stop the stopwatch
    clearInterval(timer);
    timer = null;
    button.textContent = "Start";
  } else {
    // If timer is not running, start the stopwatch
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000); // Update every second
    button.textContent = "Stop";
  }
}

function reset() {
  clearInterval(timer);
  timer = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  document.getElementById("startStopButton").textContent = "Start";
  document.getElementById("lapList").innerHTML = ""; 
}

function recordLap() {
  if (!timer) return; 
  const lapTime = formatTime(hours, minutes, seconds);
  const lapList = document.getElementById("lapList");
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapList.appendChild(lapItem);
}
updateDisplay();