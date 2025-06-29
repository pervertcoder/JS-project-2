"use strict";

//selecting elements
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const currentScore0EL = document.getElementById("current--0");
const currentScore1EL = document.getElementById("current--1");

const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

/*
const testFunction = function () {
  console.log("btn clicked");
};
*/
//starting condition
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

//rolling dice functionality

btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2.display the dice
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${dice}.png`;

    //3.check for roll 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  //1.Add the current score to active player's score
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  //2.check if the score >= 100
  if (score[activePlayer] >= 20) {
    //finish the game
    playing = false;
    diceEL.classList.add("hidden");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    //switch to the next player
    switchPlayer();
  }
});
