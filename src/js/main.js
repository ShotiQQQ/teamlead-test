const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
});

const form = document.querySelector('#form-order');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})