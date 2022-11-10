const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let myTimer;

/*had to look this part up. The way I tried kept adding zeros each time the number increased
 I had the ternary operator seperate from the innerHTML variable. 
 I did have to adapt the code the I found.
*/
function display() {
  hoursDisplay.innerHTML = (hours < 10 ? "0" : "") + String(hours) + ":";
  minutesDisplay.innerHTML = (minutes < 10 ? "0" : "") + String(minutes) + ":";
  secondsDisplay.innerHTML = (seconds < 10 ? "0" : "") + String(seconds) + ":";
  millisecondsDisplay.innerHTML =
    (milliseconds < 10 ? "0" : "") + String(milliseconds);
}

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
  tick();
}

function stop() {
  console.log("stop has been clicked");
  clearTimeout(myTimer);
}

function reset() {
  console.log("resets been clicked");
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  display();
  stop();
}

function tick() {
  milliseconds++;
  myTimer = setTimeout(tick, 1);
  if (milliseconds > 999) {
    milliseconds = 0;
    seconds += 1;
  }
  if (seconds > 59) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes > 59) {
    minutes = 0;
    hours += 1;
  }
  display();
}
display();
