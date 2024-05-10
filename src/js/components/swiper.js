import { init } from 'aos';
import Swiper, {
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper';

Swiper.use([Autoplay, Pagination, Navigation]);

const swiperHeroBg = new Swiper('.hero__swiper-background', {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
});

const swiperHero = new Swiper('.swiper-main', {
  slidesPerView: 'auto',
  speed: 500,
  loop: true,
  spaceBetween: 35,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  navigation: {
    prevEl: '.swiper-main__prev',
    nextEl: '.swiper-main__next',
    clickable: true,
  },
   breakpoints: {
    320: {
      spaceBetween: 17
    },
    576: {
      spaceBetween: 35
    }
  },

  on: {
    slideChange: function () {

    }
  },
});
