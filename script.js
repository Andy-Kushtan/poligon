"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnCloseOk = document.querySelector(".btn__close-ok");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const labelTimer = document.querySelector(".main-roullet__taimer__counter");
const labelTaimerText = document.querySelector(
  ".main-roullet__taimer__rolling"
);
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
const btnAllRed = document.querySelector(".display-interface__all-bet__coulor");
const btnRED1 = document.querySelector(
  ".display-interface__all-bets__numbers-red-1"
);
const btnRED2 = document.querySelector(
  ".display-interface__all-bets__numbers-red-2"
);
const btnRED3 = document.querySelector(
  ".display-interface__all-bets__numbers-red-3"
);
const btnRED4 = document.querySelector(
  ".display-interface__all-bets__numbers-red-4"
);
const btnRED5 = document.querySelector(
  ".display-interface__all-bets__numbers-red-5"
);
const btnRED6 = document.querySelector(
  ".display-interface__all-bets__numbers-red-6"
);
const btnRED7 = document.querySelector(
  ".display-interface__all-bets__numbers-red-7"
);
const bntZero = document.querySelector(".display-interface__zero-box__zero");
const bntAllBlack = document.querySelector(
  ".display-interface__all-bet__coulor-black"
);
const btnBlack8 = document.querySelector(
  ".display-interface__all-bets__numbers-black-8"
);
const btnBlack9 = document.querySelector(
  ".display-interface__all-bets__numbers-black-9"
);
const btnBlack10 = document.querySelector(
  ".display-interface__all-bets__numbers-black-10"
);
const btnBlack11 = document.querySelector(
  ".display-interface__all-bets__numbers-black-11"
);
const btnBlack12 = document.querySelector(
  ".display-interface__all-bets__numbers-black-12"
);
const btnBlack13 = document.querySelector(
  ".display-interface__all-bets__numbers-black-13"
);
const btnBlack14 = document.querySelector(
  ".display-interface__all-bets__numbers-black-14"
);
const counterRed = document.querySelector(".counter__red");
const counterZero = document.querySelector(".counter__zero");
const counterBlack = document.querySelector(".counter__black");
const totalBetAmountRed = document.querySelector(
  ".display-players__totalbet__amount-red"
);
const totalBetAmountZero = document.querySelector(
  ".display-players__totalbet__amount-zero"
);
const totalBetAmountBlack = document.querySelector(
  ".display-players__totalbet__amount-black"
);
const totalPlayersRed = document.querySelector(
  ".display-players__players__number-red"
);
const totalPlayersZero = document.querySelector(
  ".display-players__players__number-zero"
);
const totalPlayersBlack = document.querySelector(
  ".display-players__players__number-black"
);
const RedActivePlayers = document.querySelector(
  ".active-players__container-red"
);
const ZeroActivePlayers = document.querySelector(
  ".active-players__container-zero"
);

const BlackActivePlayers = document.querySelector(
  ".active-players__container-black"
);

const RedAPBetAmountNick = document.querySelector(".active-players__betamount");
const RedAPBetAmount = document.querySelector(
  ".active-players__betamount__amount-red"
);
const winNumbersArr = document.querySelector(
  ".main-roullet__win-numbers__numbers"
);
const googleInfo = document.querySelector(".display");

//////////////////chat rules poap
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

///////////////////////bets buttons for increasing and decreasing bet
balanceReload.addEventListener("click", function () {
  balanceReload.classList.toggle("spin");
});

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

btnAllRed.addEventListener("click", function () {
  let clickCounterActivePlayers = 0;
  if (
    clickCounterActivePlayers === 0 &&
    inputBetAmount.value > 1 &&
    +balance.textContent >= inputBetAmount.value &&
    counterRed.textContent < 1
  ) {
    clickCounterActivePlayers++;
    totalPlayersRed.textContent = +totalPlayersRed.textContent + 1;
  }

  if (
    inputBetAmount.value > 1 &&
    +balance.textContent >= inputBetAmount.value
  ) {
    counterRed.textContent = +counterRed.textContent + +inputBetAmount.value;
    totalBetAmountRed.textContent =
      +totalBetAmountRed.textContent + +inputBetAmount.value;
    balance.textContent = +balance.textContent - inputBetAmount.value;
  }

  if (
    inputBetAmount.value > 1 &&
    +balance.textContent >= inputBetAmount.value &&
    counterRed.textContent > 1
  ) {
    RedActivePlayers.innerHTML = "";
    const html = `
                    <div class="active-players">
                      <img class="active-players__avatar" src="imgs/pep.jpg" alt="player">
                      <span class="active-players__nick">nick</span>
                    </div>
                    <div class="active-players__betamount">
                      <span class="active-players__betamount__amount-red">${counterRed.textContent}</span>
                      <span class="active-players__betamount__color-red"></span>
                    </div> 
        `;
    RedActivePlayers.insertAdjacentHTML("afterbegin", html);
  }

  //   else if( +balance.textContent < inputBetAmount.value) {
  //     need to show some err in the chat, thats how on poligon// plz login or your balance is lover then bet go deposit
  //   }
});
// console.log(clickCounterActivePlayers);

bntZero.addEventListener("click", function () {
  let clickCounterActivePlayers = 0;
  if (
    clickCounterActivePlayers === 0 &&
    inputBetAmount.value > 1 &&
    +balance.textContent >= inputBetAmount.value &&
    counterZero.textContent < 1
  ) {
    clickCounterActivePlayers++;
    totalPlayersZero.textContent = +totalPlayersZero.textContent + 1;
  }

  if (
    inputBetAmount.value > 1 &&
    +balance.textContent >= inputBetAmount.value
  ) {
    counterZero.textContent = +counterZero.textContent + +inputBetAmount.value;
    totalBetAmountZero.textContent =
      +totalBetAmountZero.textContent + +inputBetAmount.value;
    balance.textContent = +balance.textContent - inputBetAmount.value;
  }

  if (
    inputBetAmount.value > 1 &&
    +balance.textContent >= inputBetAmount.value &&
    counterZero.textContent > 1
  ) {
    ZeroActivePlayers.innerHTML = "";
    const htmlZero = `
                    <div class="active-players">
                      <img class="active-players__avatar" src="imgs/pep.jpg" alt="player">
                      <span class="active-players__nick">nick</span>
                    </div>
                    <div class="active-players__betamount">
                      <span class="active-players__betamount__amount-zero">${counterZero.textContent}</span>
                      <span class="active-players__betamount__color-green"></span>
                    </div> 
        `;
    ZeroActivePlayers.insertAdjacentHTML("afterbegin", htmlZero);
  }
});

bntAllBlack.addEventListener("click", function () {
  let clickCounterActivePlayers = 0;
  if (
    clickCounterActivePlayers === 0 &&
    inputBetAmount.value > 1 &&
    +balance.textContent >= inputBetAmount.value &&
    counterBlack.textContent < 1
  ) {
    clickCounterActivePlayers++;
    totalPlayersBlack.textContent = +totalPlayersBlack.textContent + 1;
  }

  if (
    inputBetAmount.value > 1 &&
    +balance.textContent >= inputBetAmount.value
  ) {
    counterBlack.textContent =
      +counterBlack.textContent + +inputBetAmount.value;
    totalBetAmountBlack.textContent =
      +totalBetAmountBlack.textContent + +inputBetAmount.value;
    balance.textContent = +balance.textContent - inputBetAmount.value;
  }

  if (
    inputBetAmount.value > 1 &&
    +balance.textContent >= inputBetAmount.value &&
    counterBlack.textContent > 1
  ) {
    BlackActivePlayers.innerHTML = "";
    const html = `
                    <div class="active-players">
                      <img class="active-players__avatar" src="imgs/pep.jpg" alt="player">
                      <span class="active-players__nick">nick</span>
                    </div>
                    <div class="active-players__betamount">
                      <span class="active-players__betamount__amount-black">${counterBlack.textContent}</span>
                      <span class="active-players__betamount__color-black"></span>
                    </div> 
        `;
    BlackActivePlayers.insertAdjacentHTML("afterbegin", html);
  }
});

//////////////////////////roullete
function rand(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min;
  return Math.ceil(Math.random() * (max - min)) + min;
}
const arrWinCircle = [3, 5, 9, 11, 0, 2, 4, 0, 13, 7];
function play() {
  document.getElementById("fillMeUpDaddy").style.transitionDuration = "10s";

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

  /////////function to change last 10 win numbers as interface;

  const addWinNumber = function () {
    arrWinCircle.pop();
    arrWinCircle.unshift(`${winNumber}`);

    const styleForWN = function (el) {
      if (arrWinCircle[el] < 8 && arrWinCircle[el] > 0) {
        return 2;
      } else if (arrWinCircle[el] > 7) {
        return 3;
      } else arrWinCircle[el] === 0;
      return 1;
    };
    winNumbersArr.innerHTML = "";
    const winNumberArrHTML = `
    <div
    class="main-roullet__win-numbers__numbers__el main-roullet__win-numbers__numbers__el__${styleForWN(
      0
    )}"
  >
    ${arrWinCircle[0]}
  </div>
  <div
    class="main-roullet__win-numbers__numbers__el main-roullet__win-numbers__numbers__el__${styleForWN(
      1
    )}"
  >
  ${arrWinCircle[1]}
  </div>
  <div
    class="main-roullet__win-numbers__numbers__el main-roullet__win-numbers__numbers__el__${styleForWN(
      2
    )}"
  >
  ${arrWinCircle[2]}
  </div>
  <div
    class="main-roullet__win-numbers__numbers__el main-roullet__win-numbers__numbers__el__${styleForWN(
      3
    )}"
  >
  ${arrWinCircle[3]}
  </div>
  <div
    class="main-roullet__win-numbers__numbers__el main-roullet__win-numbers__numbers__el__${styleForWN(
      4
    )}"
  >
  ${arrWinCircle[4]}
  </div>
  <div
    class="main-roullet__win-numbers__numbers__el main-roullet__win-numbers__numbers__el__${styleForWN(
      5
    )}"
  >
  ${arrWinCircle[5]}
  </div>
  <div
    class="main-roullet__win-numbers__numbers__el main-roullet__win-numbers__numbers__el__${styleForWN(
      6
    )}"
  >
  ${arrWinCircle[6]}
  </div>
  <div
    class="main-roullet__win-numbers__numbers__el main-roullet__win-numbers__numbers__el__${styleForWN(
      7
    )}"
  >
  ${arrWinCircle[7]}
  </div>
  <div
    class="main-roullet__win-numbers__numbers__el main-roullet__win-numbers__numbers__el__${styleForWN(
      8
    )}"
  >
  ${arrWinCircle[8]}
  </div>
  <div
    class="main-roullet__win-numbers__numbers__el main-roullet__win-numbers__numbers__el__${styleForWN(
      9
    )}"
  >
  ${arrWinCircle[9]}
  </div>
    `;
    winNumbersArr.insertAdjacentHTML("afterbegin", winNumberArrHTML);
  };

  setTimeout(addWinNumber, 11000);
  /////////////
}

// btn10.addEventListener("click", function (e) {
//   //   init();
//   setTimeout(play, 25000);
//   startProgresBarTimer();
// });
btn10.addEventListener("click", function (e) {
  play();
});

//////////////Timer
const startProgresBarTimer = function () {
  ///////returt position of rullete to the beggining
  const returnOfcet = function () {
    document.getElementById("fillMeUpDaddy").style.left = "0px";
    document.getElementById("fillMeUpDaddy").style.transitionDuration = "0s";
  };
  returnOfcet();

  labelTaimerText.textContent = "Rolling in";
  const tick = function () {
    const sec = String(time).padStart(2, 0);
    labelProgresBar.classList.remove("opacity");
    // In each call, print the remaining time to UI

    labelTimer.textContent = `${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      //   containerApp.style.opacity = 0;
      labelTaimerText.textContent = "Rolling...";
      labelTimer.textContent = "";
      labelProgresBar.classList.add("opacity");
      btnAllRed.disabled = true;
      play();
    }

    if (time > 0) {
      btnAllRed.disabled = false;
    }

    // Decrease 1s
    time--;
  };

  // Set time to 25 seconds
  let time = 15;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

startProgresBarTimer();
setInterval(startProgresBarTimer, 30000);

///////////////google sign in
// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();

//   // // $("#id of html element (he use name)").text(profile.getName());
//   // $("image").attr("src", profile.getImageUrl());
//   // $(".google__data").css("display", "flex");
//   // $(".g-signin2").css("display", "none");
//   googleInfo.classList.remove("display");
//   googleInfo.innerHTML = "";
//   const googleHTML = `
//           <img class="google__img" src="${profile.getImageUrl()}" alt="Profile img">
//           <span class="google__balance">1500</span>
//   `;
//   googleInfo.insertAdjacentHTML("afterbegin", googleHTML);
// }
// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log("Name: " + profile.getName());
//   console.log("Image URL: " + profile.getImageUrl());
//   console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

// function signOut() {
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//     console.log("User signed out.");
//     // $(".g-signin2").css("display", "flex");
//     // $(".google__data").css("display", "none");
//     googleInfo.classList.add("display");
//   });
// }
