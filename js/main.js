const informationSwiper = new Swiper('.information-swiper', {
    autoHeight: true,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.information-swiper__next',
      prevEl: '.information-swiper__prev',
    },
    breakpoints: {
    // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
});

const restaurantsSwiper = new Swiper('.restaurants-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.restaurants-swiper__next',
      prevEl: '.restaurants-swiper__prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }
});

const restaurantSwiper = new Swiper('.restaurant-gallery', {
  loop: true,
  slidesPerView: 5,
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

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', event => {
  menu.classList.toggle('active')
})


var wow = new WOW(
  {
    boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    
  }
);
wow.init();