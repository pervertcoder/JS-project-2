"use strict";

//selecting elements
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const currentScore0EL = document.getElementById("current--0");
const currentScore1EL = document.getElementById("current--1");

const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
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
  //1. generating a random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2.display the dice
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;

  //3.check for roll 1
  if (dice !== 1) {
    currentScore += dice;
    currentScore0EL.textContent = currentScore;
  } else {
  }
});
