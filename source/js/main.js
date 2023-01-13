import {initSmoothScroll} from './modules/smooth-scroll';
import {putMask} from './modules/init-masks';
import {validateInput} from './modules/validate';
import {manageMobMenu} from './modules/init-mobile-menu';
import {toggler} from './modules/init-storage-toggle';
import {operateQuantity} from './modules/operate-quantity';
import {deleteGoods} from './modules/remove-card';
import {countChar} from './modules/comment-char-counter';
import {initMap} from './modules/init-map';
import {initDadata} from './modules/init-dadata-hints';
import {manageForm} from './modules/submit-form';

window.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  putMask();
  validateInput();
  countChar();
  manageMobMenu();
  toggler();

  const quantities = document.querySelectorAll('.price');
  quantities.forEach(operateQuantity);

  const cards = document.querySelectorAll('.card');
  cards.forEach(deleteGoods)

  initMap();
  initDadata();
  manageForm();
})
