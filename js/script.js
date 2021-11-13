const timerBtn = document.querySelector(".bday-submit");
const timerDays =  document.querySelector(".timer-days");
const timerHours =  document.querySelector(".timer-hours");
const timerMinutes =  document.querySelector(".timer-minutes");
const timerSeconds =  document.querySelector(".timer-seconds");
let birthDate, birthMonth, birthYear, presentDay, birthday, dateDiff, hrsDiff, minsDiff, secsDiff;

// Time calculation function
function timerCalculator(currentHour, currentMinute, currentSecond) {
  secsDiff = (60 - currentSecond) - 1;
  minsDiff = (59 - currentMinute) + 1;
  hrsDiff = 23 - currentHour;
  return {
    h: hrsDiff,
    m: minsDiff,
    s: secsDiff
  };
}

// Timer stopper function
function timerStopper(timer) {
  clearInterval(timer);
}

// Birthday song player
function songPlayer() {
  const song = new Audio("../assets/music/Katy Perry - Birthday (Lyric Video).mp3");
  song.play();
}

// Timer Initialiser function
function timerInitialiser(e) {
  e.preventDefault();

  birthDate = parseInt(document.querySelector("#birth-date").value);
  birthMonth = parseInt(document.querySelector("#birth-month").value);
  birthYear = parseInt(document.querySelector("#birth-year").value);
  presentDay = new Date();

  if(birthYear < presentDay.getFullYear()) {
    if(presentDay.getMonth() + 1 <= birthMonth && presentDay.getDate() < birthDate) {
      birthday = new Date(presentDay.getFullYear(), birthMonth, birthDate, 0, 0, 0);
      
      let timerUpdater = setInterval(() => {
        presentDay = new Date();
        dateDiff = (birthday.getDate() - presentDay.getDate()) - 1;

        const remainingTime = timerCalculator(presentDay.getHours(), presentDay.getMinutes(), presentDay.getSeconds());
        const remainingHours = remainingTime.h, remainingMinutes = remainingTime.m, remainingSeconds = remainingTime.s;

        timerDays.innerHTML = (dateDiff > 9) ? dateDiff : `0${dateDiff}`;
        timerHours.innerHTML = (remainingHours > 9) ? remainingHours : `0${remainingHours}`;
        timerMinutes.innerHTML = (remainingMinutes > 9) ? remainingMinutes : `0${remainingMinutes}`;
        timerSeconds.innerHTML = (remainingSeconds > 9) ? remainingSeconds : `0${remainingSeconds}`;

        if(remainingHours === 0 && remainingMinutes === 0 && remainingSeconds === 0) {
          timerStopper(timerUpdater);
          songPlayer();
        }
      }, 1000);
    } else {
      alert("Cannot start timer");
    }
  } else {
    alert("Cannot start timer");
  }
}

// Timer button click event
timerBtn.addEventListener("click", timerInitialiser);
