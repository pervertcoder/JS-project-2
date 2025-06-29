"use strict";
/* 
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 66;
document.querySelector(".score").textContent = 55;

document.querySelector(".guess").value = 17;
console.log(document.querySelector(".guess").value);
*/
//challenge 1
/*
Implement a game rest functionality, so that the
player can make a new guess! Here is how:
1. Select the element with the 'again' class and
attach a click event handler
2. In the handler function, restore initial values of
the score and number variables
3. Restore the initial conditions of the message,
number, score and guess input field
4. Also restore the original background color (#222)
and number width (15rem)
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const checkSelector = document.querySelector(".check");
const messageSelector = document.querySelector(".message");
const guessSelector = document.querySelector(".guess");
const scoreSelector = document.querySelector(".score");
const bodySelector = document.querySelector("body");
const numberSelector = document.querySelector(".number");
const highscoreSelector = document.querySelector(".highscore");
const displayMessage = function (message) {
  return (messageSelector.textContent = message);
};

checkSelector.addEventListener("click", function () {
  const guess = Number(guessSelector.value);
  if (!guess) {
    messageSelector.textContent = "NO NUMBER";
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "You are correct!!";
    displayMessage("You are correct!!");
    score++;
    scoreSelector.textContent = score;

    bodySelector.style.backgroundColor = "#60b347";
    numberSelector.style.width = "30rem";
    numberSelector.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreSelector.textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    messageSelector.textContent =
      guess > secretNumber ? "too high!!" : "too low!!";
    score--;
    scoreSelector.textContent = score;

    if (scoreSelector.textContent < 1) {
      messageSelector.textContent = "You got lost the game";
      scoreSelector.textContent = 0;
    }
  }
});

/*
    //When guess is too high
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "too high!!";
    score--;
    document.querySelector(".score").textContent = score;

    if (document.querySelector(".score").textContent < 1) {
      document.querySelector(".message").textContent = "You got lost the game";
      document.querySelector(".score").textContent = 0;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "too low!!";
    score--;
    document.querySelector(".score").textContent = score;
    
    if (document.querySelector(".score").textContent < 1) {
      document.querySelector(".message").textContent = "You got lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  */

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreSelector.textContent = score;
  numberSelector.textContent = "?";
  messageSelector.textContent = "Start Guessing ...";
  guessSelector.value = "";
  numberSelector.style.width = "15rem";
  bodySelector.style.backgroundColor = "#222";
});
