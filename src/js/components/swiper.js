import Swiper, {
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper';

Swiper.use([Autoplay, Pagination, Navigation]);

const bullets = document.querySelectorAll('.swiper-pagination-bullet');

bullets.forEach(bullet => {
  bullet.setAttribute('tabindex', 0);
  bullet.addEventListener("keyup", function (event) {

    if (event.keyCode === 9) {
      bullet.click();
    }

  })
});

const swiperHeroBg = new Swiper('.hero__swiper-background', {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
});

const swiperHero = new Swiper('.swiper-main', {
  slidesPerView: 1,
  navigation: {
    prevEl: '.portfolio__btn-prev',
    nextEl: '.portfolio__btn-next',
    clickable: true,
    spaceBetween: 10,
  },
});
