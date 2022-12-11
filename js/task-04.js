const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const counterValueEl = document.querySelector("#value");
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

decrementBtnEl.addEventListener("click", onDecrementBtnClick);
incrementBtnEl.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  if (counterValue > 0) {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
  }
}

function onIncrementBtnClick() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
