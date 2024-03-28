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