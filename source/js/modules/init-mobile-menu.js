import {body} from './data';

const manageMobMenu = () => {
  const burgerButton = document.querySelector('.header__button');
  const menu = document.querySelector('.header');

  if (burgerButton) {
    burgerButton.addEventListener('click', () => {
      if (document.documentElement.clientWidth < 768) {
        menu.classList.toggle('is-open');
        body.style.overflow = 'hidden';
        if (!menu.classList.contains('is-open')) {
          body.style.overflow = 'scroll';
      } else {
          const menuLink = menu.querySelectorAll('a');

          menuLink.forEach(el => {
            el.addEventListener('click', () => {
              menu.classList.remove('is-open');
              body.style.overflow = 'scroll';
          })
        })
      }
    }
      window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth > 767) {
          menu.classList.remove('is-open');
      }
    })
  })
}
}

export {manageMobMenu};
