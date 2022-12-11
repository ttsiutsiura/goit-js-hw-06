const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);
const attributeLengthValue = inputEl.getAttribute("data-length");

function onInputBlur(event) {
  if (event.currentTarget.value.length == attributeLengthValue) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.replace("invalid", "valid");
      return;
    }
    inputEl.classList.add("valid");
  } else {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.replace("valid", "invalid");
      return;
    }
    inputEl.classList.add("invalid");
  }
}
