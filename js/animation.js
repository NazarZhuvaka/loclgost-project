const cards = document.querySelectorAll(".card");

// Додаємо слухача подій для кожного елемента
cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    card.classList.add("hovered");
  });

  card.addEventListener("mouseleave", function () {
    card.classList.remove("hovered");
  });
});

//title

document.addEventListener("DOMContentLoaded", function () {
  animateTitle();
});

function animateTitle() {
  const title = document.querySelector(".find__title");
  const words = title.innerText.split(" ");
  title.innerHTML = "";

  words.forEach((word, index) => {
    const span = document.createElement("span");
    if (word.toLowerCase() === "host") {
      span.classList.add("green-word"); // Додаємо клас для зеленого слова
    }
    span.textContent = word;
    span.style.animationDelay = `${0.2 * index}s`; // Затримка анімації
    title.appendChild(span);

    if (index < words.length - 1) {
      title.appendChild(document.createTextNode(" ")); // Додаємо пробіл між словами
    }
  });
}



// kinks 

// Отримання елементів підсекцій
var navItems = document.querySelectorAll('.links__nav');

// Функція, яка відслідковує скрол та запускає анімацію, коли підсекція наближається до видимості
function checkPosition() {
  for (var i = 0; i < navItems.length; i++) {
    var positionFromTop = navItems[i].getBoundingClientRect().top;
    if (positionFromTop - window.innerHeight < 0) {
      navItems[i].classList.add('animate');
    }
  }
}

// Виклик функції при прокрутці
window.addEventListener('scroll', checkPosition);
// Виклик функції один раз при завантаженні сторінки
window.addEventListener('DOMContentLoaded', checkPosition);


// 

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.cards__item');

  function revealCards() {
    cards.forEach(function(card, index) {
      setTimeout(function() {
        card.classList.add('active');
      }, index * 200); // Затримка у мілісекундах
    });
  }

  revealCards();
});






// 

document.addEventListener("DOMContentLoaded", function() {
  var animatedContainer = document.getElementById('animated-container');
  var animatedTitle = document.getElementById('animated-title');
  var animatedDesc = document.querySelector('.find__desc');

  animatedContainer.classList.add('animated');
  animatedTitle.classList.add('animated');
  animatedDesc.classList.add('animated');
});


//












