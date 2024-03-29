const showMore = document.querySelector('.show-more');
const hideButton = document.querySelector('.hide');
const products = document.querySelectorAll('.cards__item');
let items = 4;

showMore.addEventListener('click', () => {
    items += 4;

    products.forEach((product, index) => {
        if (index < items) {
            product.classList.add('is-visible');
        }
    });

    if (items >= products.length) {
        showMore.style.display = 'none';
        hideButton.style.display = 'block';
    }
});

hideButton.addEventListener('click', () => {
    items = 4;

    products.forEach((product, index) => {
        if (index >= items) {
            product.classList.remove('is-visible');
        }
    });

    showMore.style.display = 'block';
    hideButton.style.display = 'none';
});







