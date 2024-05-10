import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import { isMobileBurger } from '../functions/check-viewport';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const burgerMobile = document?.querySelector('[data-burger-mobile]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const menuList = document?.querySelector('[data-menu-list]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('header__nav--active');
    overlay?.classList.toggle('overlay--active');

    if (menu?.classList.contains('header__nav--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }

    if (menuList.contains(burgerMobile)) {
      return;
    }

    if (isMobileBurger()) {
      burgerMobile.classList.toggle('header__btn--mobile')
      menuList.appendChild(burgerMobile);
    }

  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    overlay.classList.remove('overlay--active');

    if (isMobileBurger()) {
      burgerMobile?.classList.remove('header__btn--mobile');
    }

    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      overlay.classList.remove('overlay--active');

      if (isMobileBurger()) {
        burgerMobile?.classList.remove('header__btn--mobile');
      }

      enableScroll();
    });
  });

  burgerMobile.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    overlay.classList.remove('overlay--active');
    enableScroll();
  });
})();
