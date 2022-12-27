import {putMask} from './modules/init-masks';
import {validateInput} from './modules/validate';
import {manageMobMenu} from './modules/init-mobile-menu';
import {toggler} from './modules/init-storage-toggle';
import {operateQuantity} from './modules/operate-quantity';
import {manageForm} from './modules/submit-form';
import {countChar} from './modules/comment-char-counter';

window.addEventListener('DOMContentLoaded', () => {
  putMask();
  validateInput();
  manageMobMenu();
  toggler();

  const quantities = document.querySelectorAll('.quantity');
  quantities.forEach(operateQuantity);
  manageForm();

  countChar();
})
