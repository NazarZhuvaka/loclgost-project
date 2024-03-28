//Mobile menu open and close
function navToggle() {
  document.getElementById("headerUl").classList.toggle("_active");
  document.getElementById("html").classList.toggle("_overflow");
}

// Time
window.onload = function () {
  window.setInterval(function () {
    var date = new Date();

    var years = date.getFullYear();

    var clock = years;

    document.getElementById("year-clock").innerHTML = clock;
  });
};

// Tabs

const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    //убрати актів у всі
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }
    //добавити активний клас до данноЇ кнопки
    this.classList.add("tab-controls__btn--active");

    // відобразити потрібні товари і hide непотрібні
    for (let product of tabsProducts) {
      //провірка на all
      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        }
      }
    }
  });
}

// Like btn

// Отримуємо посилання на SVG-елемент і його шлях за їхнім id
const likeButton = document.getElementById("likeButton");
const pathElement = document.getElementById("myPath");
let isLiked = false;

likeButton.addEventListener("click", function () {
  if (!isLiked) {
    pathElement.setAttribute("fill", "red");
    pathElement.setAttribute("stroke", "red");
    isLiked = true;
  } else {
    pathElement.setAttribute("fill", "none");
    pathElement.setAttribute("stroke", "#171E1D");
    isLiked = false;
  }
});
