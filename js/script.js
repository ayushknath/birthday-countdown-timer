const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const timerButton = document.querySelector(".timer-button");
const aboutSection = document.querySelector(".about-section");
const formSection = document.querySelector(".form-section");
const star1 = document.querySelector(".form-section .star1");
const star2 = document.querySelector(".form-section .star2");
const countdownSection = document.querySelector(".countdown-section");
const birthday = new Date();
let t;

function birthdayTimer(bigDay) {
  const present = new Date();
  const presentDate = present.getDate();
  const presentHour = present.getHours();
  const presentMinute = present.getMinutes();
  const presentSecond = present.getSeconds();

  let dayDiff = birthday.getDate() - presentDate;
  let hourDiff = birthday.getHours() - presentHour;
  let minDiff = birthday.getMinutes() - presentMinute;
  let secDiff = birthday.getSeconds() - presentSecond;

  days.innerHTML = dayDiff > 9 ? dayDiff : `0${dayDiff}`;
  hours.innerHTML = hourDiff > 9 ? hourDiff : `0${hourDiff}`;
  minutes.innerHTML = minDiff > 9 ? minDiff : `0${minDiff}`;
  seconds.innerHTML = secDiff > 9 ? secDiff : `0${secDiff}`;

  if (dayDiff === 0 && hourDiff === 0 && minDiff === 0 && secDiff === 0)
    clearInterval(t);
}

timerButton.addEventListener("click", (e) => {
  e.preventDefault();

  let userDate = parseInt(document.querySelector("#birth-date").value);
  let userMonth = parseInt(document.querySelector("#birth-month").value);

  if (isNaN(userDate) || isNaN(userMonth))
    alert("Provide specified inputs properly!");
  else if (userMonth - 1 !== birthday.getMonth())
    alert("Sorry but the birthday should be within this month");
  else {
    birthday.setMonth(userMonth - 1);
    birthday.setDate(userDate - 1);
    birthday.setHours(23);
    birthday.setMinutes(59);
    birthday.setSeconds(59);

    aboutSection.classList.add("disappear");
    formSection.classList.add("slide");
    star1.classList.add("rotate-clock");
    star2.classList.add("rotate-anti-clock");
    countdownSection.classList.add("appear");

    t = setInterval(() => {
      birthdayTimer(birthday);
    }, 1000);
  }
});
