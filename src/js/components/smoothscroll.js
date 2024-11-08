import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
  // speed: 2000,
  duration: 200,
  preventUserScroll: false,
  // speedAsDuration: true
});
