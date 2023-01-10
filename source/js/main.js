import {putMask} from './modules/init-masks';
import {validateInput} from './modules/validate';
import {manageMobMenu} from './modules/init-mobile-menu';
import {toggler} from './modules/init-storage-toggle';
import {operateQuantity} from './modules/operate-quantity';
import {chooseSize} from './modules/init-sizes';
import {countChar} from './modules/comment-char-counter';
import {initMap} from './modules/init-map';
import {initDadata} from './modules/init-dadata-hints';
import {manageForm} from './modules/submit-form';

window.addEventListener('DOMContentLoaded', () => {
  putMask();
  validateInput();
  countChar();
  manageMobMenu();
  toggler();

  const quantities = document.querySelectorAll('.price');
  quantities.forEach(operateQuantity);

  const cards = document.querySelectorAll('.card__info');
  cards.forEach(chooseSize);

  initMap();
  initDadata();
  manageForm();
})
