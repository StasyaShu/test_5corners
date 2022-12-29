import { putMask } from './modules/init-masks';
import { validateInput } from './modules/validate';
import { manageMobMenu } from './modules/init-mobile-menu';
import { toggler } from './modules/init-storage-toggle';
import { operateQuantity } from './modules/operate-quantity';
import { manageForm } from './modules/submit-form';
import { countChar } from './modules/comment-char-counter';
import { MAIN_COORDS } from './modules/data';

window.addEventListener('DOMContentLoaded', () => {
  putMask();
  validateInput();
  manageMobMenu();
  toggler();

  const quantities = document.querySelectorAll('.quantity');
  quantities.forEach(operateQuantity);

  ymaps.ready(() => {
    new ymaps.Map('map', {
      center: [MAIN_COORDS.lat, MAIN_COORDS.lng],
      zoom: 7
    });

    new ymaps.SuggestView('suggest');
  })

  countChar();
  manageForm();
})
