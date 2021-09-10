var started = false;
var repsDoneNb = 0;
var timerPending = false;
var delay = 0;
var intervalID = null;
let wakeLock = null;

document.onkeypress = function (e) {
  if(e.code == 'Space') handleKeyPress();
};
document.ontouchstart = function () {
  handleKeyPress();
};

function handleKeyPress(){
  if(!started) started = true;
  if (timerPending) return;

  repsDoneNb ++;
  startTimer();
  document.querySelector('#text').innerText = delay;
  document.querySelector('#count').innerText = repsDoneNb;
}

function startTimer(){
  timerPending = true;
  delay = 60;
  intervalID = setInterval(runTimer, 1000);
  requestWakeLock();
}

function runTimer(){
  delay --;
  document.querySelector('#text').innerText = delay;
  if (delay > 0) return;

  clearInterval(intervalID);
  timerPending = false;
  wakeLock.release()
    .then(() => {
      wakeLock = null;
    });
}

const requestWakeLock = async () => {
  if ('wakeLock' in navigator) {
    try {
      wakeLock = await navigator.wakeLock.request();
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  }
};

