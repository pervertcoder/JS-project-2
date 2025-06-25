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
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "NO NUMBER";
  } else if (guess > number) {
    document.querySelector(".message").textContent = "too high!!";
    score--;
    document.querySelector(".score").textContent = score;

    /*
    document.querySelector(".score").textContent =
      document.querySelector(".score").textContent - 1;
    */
    if (document.querySelector(".score").textContent < 1) {
      document.querySelector(".message").textContent = "You got lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    document.querySelector(".message").textContent = "too low!!";
    score--;
    document.querySelector(".score").textContent = score;
    /*
    document.querySelector(".score").textContent =
      document.querySelector(".score").textContent - 1;
    */
    if (document.querySelector(".score").textContent < 1) {
      document.querySelector(".message").textContent = "You got lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === number) {
    document.querySelector(".message").textContent = "You are correct!!";
    score++;
    document.querySelector(".score").textContent = score;
    /*
    document.querySelector(".score").textContent =
      Number(document.querySelector(".score").textContent) + 1;
    */
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start Guessing ...";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
