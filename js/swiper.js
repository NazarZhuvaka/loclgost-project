const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4.9,
  freeMode: true,
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  grabCursor: true,
  spaceBetween: true,
  spaceBetween: 10,


  thumbs: { swiper: swiper },
});
