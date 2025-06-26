"use strict";

const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  //console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/*
你寫的 e 或 event 並不是什麼關鍵字，它只是變數名稱。

瀏覽器會把事件物件傳給你的函式，然後你給它什麼變數名稱，它就用那個名稱來代指整個事件物件。

這正是你說的那句：

把事件物件的值，賦給我們自己設的變數。
*/
