const cards = document.querySelectorAll('.card');

// Додаємо слухача подій для кожного елемента
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', function() {
        card.classList.remove('hovered');
    });
});




//title

document.addEventListener("DOMContentLoaded", function() {
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
      span.style.animationDelay = `${0.4 * index}s`; // Затримка анімації
      title.appendChild(span);
      
      if (index < words.length - 1) {
        title.appendChild(document.createTextNode(" ")); // Додаємо пробіл між словами
      }
    });
  }
  