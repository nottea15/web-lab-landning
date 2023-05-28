let menuBtn = document.querySelector(".navigation__burger");
let menu = document.querySelector(".navigation__menu");
console.log(menu, "<===== menu", "  menuBTN===>", menuBtn);
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
