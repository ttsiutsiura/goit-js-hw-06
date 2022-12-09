const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItemEls = ingredients.map((element, index) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = element;
  listItemEl.classList.add("item");

  return listItemEl;
});

document.querySelector("#ingredients").append(...listItemEls);