const outputEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  outputEl.textContent = bodyEl.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
