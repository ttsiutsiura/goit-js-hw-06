const inputEl = document.querySelector("#controls").firstElementChild;
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let collection = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < inputEl.value; i++) {
    const boxEl = document.createElement("div");

    collection.push(boxEl);
  }

  collection[0].style.backgroundColor = getRandomHexColor();
  collection[0].style.width = "30px";
  collection[0].style.height = "30px";

  for (let i = 1; i < collection.length; i++) {
    collection[i].style.width =
      Number.parseInt(collection[i - 1].style.width) + 10 + "px";
    collection[i].style.height =
      Number.parseInt(collection[i - 1].style.height) + 10 + "px";

    collection[i].style.backgroundColor = getRandomHexColor();
  }

  boxesEl.append(...collection);
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
  collection = [];
}

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);
