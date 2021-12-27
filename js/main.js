const informationSwiper = new Swiper('.information-swiper', {
    loop: true,
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.information-swiper__next',
      prevEl: '.information-swiper__prev',
    },
});

const restaurantsSwiper = new Swiper('.restaurants-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.restaurants-swiper__next',
      prevEl: '.restaurants-swiper__prev',
    },
});

const footerInput = document.querySelector('.cta-input input[type="email"]');
const footerSpan = document.querySelector('.cta-input span')
footerInput.addEventListener('input', () => {
  if(footerInput.value) {
    footerSpan.classList.add('active');
  } else {
    footerSpan.classList.remove('active');
  }
})
console.log(footerInput.value);

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', event => {
  menu.classList.toggle('active')
})
