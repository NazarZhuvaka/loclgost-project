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

// Отримуємо посилання на SVG-елемент і його шлях за їхнім класом

const likeButtons = document.querySelectorAll('.likeButton');
const pathElements = document.querySelectorAll('.myPath');

// Додаємо слухача подій для кожного елемента
likeButtons.forEach((likeButton, index) => {
    let isLiked = false;

    likeButton.addEventListener("click", function () {
        if (!isLiked) {
            pathElements[index].setAttribute("fill", "red");
            pathElements[index].setAttribute("stroke", "red");
            isLiked = true;
        } else {
            pathElements[index].setAttribute("fill", "none");
            pathElements[index].setAttribute("stroke", "#171E1D");
            isLiked = false;
        }
    });
});


// drop menu

document.addEventListener("DOMContentLoaded", function() {
  const guestButton = document.getElementById("guestButton");
  const dropdownContent = document.getElementById("dropdownContent");
  const guestOption = document.getElementById("guestOption");
  const authOption = document.getElementById("authOption");

  // При кліку на кнопку відкрити/закрити випадаючий список
  guestButton.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
  });

  // При виборі "Guest"
  guestOption.addEventListener("click", function() {
    guestButton.querySelector("p").textContent = "Guest";
    dropdownContent.classList.remove("show");
  });

  // При виборі "Авторизований користувач"
  authOption.addEventListener("click", function() {
    guestButton.querySelector("p").textContent = "Авторизований користувач";
    dropdownContent.classList.remove("show");
  });

  // Закрити випадаючий список при кліку за межами нього
  window.addEventListener("click", function(event) {
    if (!event.target.matches('.find__form-guest')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  });
});

