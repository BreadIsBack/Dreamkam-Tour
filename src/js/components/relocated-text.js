const relocatedText = document.querySelector('.second-day__descr');
const nextPlace = document.querySelector('.second-day__content');
const originPlace = document.querySelector('.second-day__slider-container');

window.addEventListener('resize', () => {
  if (window.innerWidth < 861) {
    nextPlace.appendChild(relocatedText);
  } else if (window.innerWidth > 860) {
    originPlace.appendChild(relocatedText);
  }
});

const isDesktop = () => {
  if (window.innerWidth < 861) {
    nextPlace.appendChild(relocatedText);
  }

  return false;
};

isDesktop();
