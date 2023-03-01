"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnCloseOk = document.querySelector(".btn__close-ok");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const labelTimer = document.querySelector(".main-roullet__taimer__counter");
const labelTaimerText = document.querySelector(".main-roullet__taimer__text");
const balanceReload = document.querySelector(
  ".main-roullet__balance__balance__reload"
);
const spin = document.querySelector(".spin");
const labelProgresBar = document.querySelector(
  ".main-roullet__taimer__progres-bar"
);
const inputBetAmount = document.querySelector(
  ".main-roullet__balance__bet__input"
);
const btnClear = document.querySelector(
  ".main-roullet__balance__buttons__el-clear"
);
const btn10 = document.querySelector(".btn10");
const btn100 = document.querySelector(".btn100");
const btn1000 = document.querySelector(".btn1000");
const btn12 = document.querySelector(".btn12");
const btnX2 = document.querySelector(".btnx2");
const btnMAX = document.querySelector(".btnmax");
const balance = document.querySelector(
  ".main-roullet__balance__balance__amount"
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

//bets buttons for increasing and decreasing bet
btnClear.addEventListener("click", function () {
  inputBetAmount.value = 0;
});

btn10.addEventListener("click", function () {
  inputBetAmount.value = +inputBetAmount.value + 10;
});

btn100.addEventListener("click", function () {
  inputBetAmount.value = +inputBetAmount.value + 100;
});

btn1000.addEventListener("click", function () {
  inputBetAmount.value = +inputBetAmount.value + 1000;
});

btn12.addEventListener("click", function () {
  inputBetAmount.value = +inputBetAmount.value / 2;
});

btnX2.addEventListener("click", function () {
  inputBetAmount.value = +inputBetAmount.value * 2;
});

btnMAX.addEventListener("click", function () {
  inputBetAmount.value = balance.textContent;
});

balanceReload.addEventListener("click", function () {
  balanceReload.classList.add("spin");
});
