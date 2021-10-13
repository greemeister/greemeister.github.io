const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
let timeLimit = 0;
let timePassed = 0;
let timeLeft = 0;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    0
  )}</span>
</div>
`;

$('.mode').click(function() {modeClickHandler($(this));});

function modeClickHandler(element) {
  let timeout = 0;

  switch (element.attr('id')) {
    case 'normal':
      timeout = 10 * 60;
      break;
    case 'hard':
      timeout = 6.5 * 60;
      break;
    case 'brutal':
      timeout = 4 * 60;
      break;
  }
  
  if (timeout !== 0) {
    startTimer(timeout);

    $('.mode').removeClass('clicked');
    element.toggleClass('clicked');
  }
}

function onTimesUp() {
  clearInterval(timerInterval);
  timerInterval = null;
  timePassed = 0;
}

function startTimer(limit) {
    if (timerInterval !== null) {
        onTimesUp();
    }

    if (timerInterval === null) {
      timerInterval = setInterval(() => {
          timeLimit = limit;
          timePassed = timePassed += 1;
          timeLeft = timeLimit - timePassed;
          document.getElementById("base-timer-label").innerHTML = formatTime(
              timeLeft
          );
          setCircleDasharray();
          setRemainingPathColor(timeLeft);
      
          if (timeLeft === 0) {
              onTimesUp();
          }
      }, 1000);
  }
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  } else {
      document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);

      document
      .getElementById("base-timer-path-remaining")
      .classList.remove(alert.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(info.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / timeLimit;
  return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}