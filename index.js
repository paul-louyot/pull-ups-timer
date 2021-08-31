var started = false;
var repsDoneNb = 0;
var timerPending = false;
var delay = 0;
var intervalID = null;
document.onkeypress = function (e) {
  if(e.code == 'Space') handleKeyPress();
};

function handleKeyPress(){
  if(!started) started = true;
  if (timerPending) return;

  repsDoneNb ++;
  startTimer();
}

function startTimer(){
  timerPending = true;
  delay = 6;
  document.querySelector('#text').innerText = delay;
  intervalID = setInterval(runTimer, 1000);
}

function runTimer(){
  delay --;
  document.querySelector('#text').innerText = delay;
  if(delay == 0) clearInterval(intervalID);
}

function debug(){
  console.log(started, repsDoneNb)
}

