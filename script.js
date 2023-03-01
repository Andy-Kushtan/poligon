"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnCloseOk = document.querySelector(".btn__close-ok");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const labelTimer = document.querySelector(".main-roullet__taimer__counter");
const labelTaimerText = document.querySelector(".main-roullet__taimer__text");
const labelProgresBar = document.querySelector(
  ".main-roullet__taimer__progres-bar"
);

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
btnCloseOk.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const startLogOutTimer = function () {
  const tick = function () {
    // const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time).padStart(2, 0);
    labelProgresBar.classList.remove("opacity");
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      //   labelWelcome.textContent = "Log in to get started";
      //   containerApp.style.opacity = 0;
      labelTaimerText.textContent = "Rolling...";
      labelProgresBar.classList.add("opacity");
    }

    // Decrease 1s
    time--;
  };

  // Set time to 25 seconds
  let time = 25;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

// startLogOutTimer();

// when i will add spinning roullet => need to add startLogOutTimer(); when the spin is over;

// background pisition
