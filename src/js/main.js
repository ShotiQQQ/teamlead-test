const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
});

const form = document.querySelector('#form-order');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

const timer = document.querySelector('#timer');

let countSec = 60;
let countMin = 30;

const timeout = setInterval(() => {
  countSec -= 1;
  timer.textContent = `${countMin} мин.`
  if (countSec === 1) {
    countMin -= 1;
    countSec = 60;
    if (countMin === 0) {
      timer.textContent = `${countMin} мин.`
      clearTimeout(timeout);
    }
  }
}, 1000);