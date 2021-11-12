// Fetch all required elements and resources
const confettiVideo = document.querySelector(".confetti");
const overlay = document.querySelector(".overlay");
const nameField = document.getElementsByClassName("bday-person");
const nameFieldArr = Array.from(nameField);
const birthDate = new Date();

if (birthDate.getMonth() === 10 && birthDate.getDate() === 14) {
  // Change page title
  document.title = "HBD Ayush Kumar Nath";

  // Change name
  nameFieldArr.forEach((value, index) => {
    if (index === 1) {
      value.innerHTML = "Ayush Kumar Nath";
    } else {
      value.innerHTML = "Ayush!";
    }
  });

  // Show overlay
  overlay.style.display = "block";

  // Play video
  confettiVideo.style.display = "block";
} else {
  // Default page title
  document.title = "HBD Mortal";

  // Default name
  nameFieldArr.forEach((value) => {
    value.innerHTML = "Mortal";
  });

  // Default overlay
  overlay.style.display = "none";

  // Default video mode
  confettiVideo.style.display = "none";
}
