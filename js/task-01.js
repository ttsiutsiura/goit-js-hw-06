const categoriesQuantity = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesQuantity.length);

categoriesQuantity.forEach((element, index) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
