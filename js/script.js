const headerMenu = document.querySelector(".header__navigation");

const headerMenuHandler = document.querySelector(".header-mobile-menu");

headerMenuHandler.addEventListener("click", function () {
  this.classList.toggle("header-mobile-menu--active");
  headerMenu.classList.toggle("header__navigation--active");
});

const createMenu = document.querySelectorAll(
  ".main__pizza-choise-navigation .nav__link"
);

createMenu.forEach((item) => {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    createMenu.forEach((item) => {
      item.classList.remove("nav__link--active");
    });
    item.classList.add("nav__link--active");
  });
});

const createButton = document.querySelector(".create-pizza-btn");
createButton.addEventListener("click", function () {
  alert("Thank you for your order");
});
