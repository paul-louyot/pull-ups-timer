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
  document.querySelector('#text').innerText = delay;
  document.querySelector('#count').innerText = repsDoneNb;
}

function startTimer(){
  timerPending = true;
  delay = 60;
  intervalID = setInterval(runTimer, 1000);
}

function runTimer(){
  delay --;
  document.querySelector('#text').innerText = delay;
  if (delay > 0) return;

  clearInterval(intervalID);
  timerPending = false;
}

function debug(){
  console.log(started, repsDoneNb)
}

