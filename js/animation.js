const card = document.getElementById('card');

    card.addEventListener('mouseenter', function() {
        card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', function() {
        card.classList.remove('hovered');
    });