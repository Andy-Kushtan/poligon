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

//roullete
// var amountOfBoxes = 100;

// var order = [];

// function init() {
//   let roulette = document.getElementById("fillMeUpDaddy");
//   roulette.innerHTML = "";
//   let tempBets = [
//     ["player1", "red"],
//     ["player2", "yellowgreen"],
//   ];
//   for (var i = 0; i < amountOfBoxes; i++) {
//     var randomPlayer = rand(0, tempBets.length);
//     var node = document.createElement("div");
//     var h3 = document.createElement("h3");
//     h3.innerHTML = tempBets[randomPlayer][0];
//     h3.style.backgroundColor = tempBets[randomPlayer][1];
//     node.appendChild(h3);
//     roulette.appendChild(node);
//   }
// }

function rand(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min;
  return Math.ceil(Math.random() * (max - min)) + min;
}

function play() {
  //add sound if you want
  //var audio = new Audio('spin.mp3');
  //audio.play();

  const arrWinNumbs = [
    1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0,
    11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1,
    14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0,
    11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1,
    14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0,
    11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1,
    14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0,
    11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1,
    14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8,
  ];

  //   const offset = rand(75, 90 * 140); //90*140=12600
  const offset = rand(3600, 10800);

  document.getElementById("fillMeUpDaddy").style.left = -offset + "px";

  //win number logic/ made this way because we start for number 1, but pointer line is locaited at number 6, so I add 450, which is the px from the beggining(left) and we get write shown win number;
  //   const winnerNumber = offset + 560;
  const winnerNumber = offset + 453;

  const winNumber = arrWinNumbs[`${Math.floor(winnerNumber / 80)}`];
  console.log(winNumber); //win number from array;

  //   console.log(arrWinNumbs[3]);
  //   console.log(offset);
  //   console.log(arrWinNumbs.length);
  //   console.log(winnerNumber);
  //   console.log(winnerNumber / 80);

  //   let chosenPlayer = document.createElement("div");
  //   chosenPlayer.style.backgroundColor = bets[order[parseInt(offset / 140)]][1];
  //   chosenPlayer.innerHTML = bets[order[parseInt(offset / 140)]][0];
  //   setTimeout(function () {
  //     // document.getElementById("winners").appendChild(chosenPlayer);
  //     document.getElementById("fillMeUpDaddy").style.transitionDuration = "0s";
  //     document.getElementById("fillMeUpDaddy").style.left = "0px";
  //     setTimeout(function () {
  //       document.getElementById("fillMeUpDaddy").style.transitionDuration = "5s";
  //     }, 50);
  //   }, 5500);
}

btn10.addEventListener("click", function (e) {
  //   init();
  play();
});

// 195 cubes
// 1 cube 80px
// 195*80= 15600
// 15600/195 = 80 px per one cube;
