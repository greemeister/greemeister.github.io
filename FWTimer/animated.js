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

const MODE_TIMES = {
  normal: {
    limit: 10 * 60
  },
  hard: {
    limit: 6.5 * 60
  },
  brutal: {
    limit: 4 * 60
  }
};
  
let timeLimit = 0;
let timePassed = 0;
let timeLeft = 0;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

var warningAudio = new Audio('audio/warning.mp3');
var hornAudio = new Audio('audio/horn.mp3');
hornAudio.volume = 0.65;
warningAudio.volume = 0.65;

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

  timeout = MODE_TIMES[element.attr('id')].limit;

  if (timeout !== 0) {
    startTimer(timeout);

    $('.mode').removeClass('clicked');
    element.toggleClass('clicked');
  }
}

function onTimesUp(playSound) {
  clearInterval(timerInterval);
  timerInterval = null;
  timePassed = 0;
  if (playSound === true) {
    hornAudio.play();
  }
}

function startTimer(limit) {
    if (timerInterval !== null) {
        onTimesUp(false);
    }

    if (timerInterval === null) {
      timeLimit = timeLeft = limit;
      $('#base-timer-label').removeClass('blink');
      updateLabel(timeLimit);

      timerInterval = setInterval(() => {
          timePassed = timePassed += 1;
          timeLeft = timeLimit - timePassed;
          updateLabel(timeLeft);
      
          if (timeLeft === 45) {
            warningAudio.play();
          }

          if (timeLeft === 0) {
              onTimesUp(true);
              $('#base-timer-label').addClass('blink');
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

function updateLabel(_timeLeft) {
  $('#base-timer-label').html(formatTime(_timeLeft));
  setCircleDasharray();
  setRemainingPathColor(_timeLeft);
}