const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
  }

  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);
  event.currentTarget.reset();
}

// -----------------------------

// Не до конца понимаю как здесь производится деструктуризация. Взял фрагмент из конспекта.

// const {
//     elements: { email, password },
//   } = event.currentTarget;

// -----------------------------
