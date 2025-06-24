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
let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "NO NUMBER";
  } else if (guess > number) {
    document.querySelector(".message").textContent = "too high!!";
    let score = document.querySelector(".score").textContent;
    if (document.querySelector(".score").textContent < 1) {
      document.querySelector(".message").textContent = "You got lose the game";
    }
  } else if (guess < number) {
    document.querySelector(".message").textContent = "too low!!";
  }
});
console.log(score);
