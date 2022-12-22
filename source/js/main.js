import {putMask} from "./modules/init-masks";
import {validateInput} from "./modules/validate";
import {manageMobMenu} from "./modules/init-mobile-menu";

window.addEventListener('DOMContentLoaded', () => {
  putMask();
  validateInput();
  manageMobMenu();
})
