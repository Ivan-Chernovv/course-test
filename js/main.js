const button = document.querySelector(".menu__btn");
const menu = document.querySelector("#list");
const shadow = document.querySelector(".registration_shadow");

button.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

button.addEventListener("click", () => {
  shadow.classList.toggle("shadow");
});
