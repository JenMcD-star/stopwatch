const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const watchDisplay =
  hoursDisplay + minutesDisplay + secondsDisplay + millisecondsDisplay;

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function display() {
  hours < 10 ? (hours = "0" + hours) : (hours = hours);
  minutes < 10 ? (minutes = "0" + minutes) : (minutes = minutes);
  seconds < 10 ? (seconds = "0" + seconds) : (seconds = seconds);
  milliseconds < 10 ? (milliseconds = "0" + milliseconds): (milliseconds = milliseconds);
  hoursDisplay.innerHTML = `${hours}:`;
  minutesDisplay.innerHTML = `${minutes}:`;
  secondsDisplay.innerHTML = `${seconds}:`;
  millisecondsDisplay.innerHTML = `${milliseconds}`;
}

display();
/* 
1000 milliseconds in a second
60 seconds in a minute
60 minutes in an hour
*/
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

function start() {
  console.log("start has been clicked");
}

function stop() {
  console.log("stop has been clicked");
}

function reset() {
  console.log("resets been clicked");
  milliseconds = 00;
  seconds = 00;
  minutes = 00;
  hours = 00;
  display();
}
