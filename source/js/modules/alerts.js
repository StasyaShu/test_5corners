import {body, ESC_KEY_CODE, form} from "./data";

const successTemplate = document.querySelector('#success-message').content.querySelector('.success-message');
const submitSuccessMessage = successTemplate.cloneNode(true);
const overlay = document.querySelector('.overlay');

const documentClickHandler = () => {
  closeSubmitSuccess();
}

const documentKeydownHandler = (evt) => {
  if (evt.keyCode === ESC_KEY_CODE) {
    closeSubmitSuccess();
  }
}

function onSubmitSuccess () {
  document.body.append(submitSuccessMessage);
  overlay.classList.add('overlay--active');
  form.reset();
  scrollTo({top: 0, behavior: 'smooth'});
  body.style.overflow = 'hidden';
  document.addEventListener('keydown', documentKeydownHandler);
  document.addEventListener('click', documentClickHandler);
}

function closeSubmitSuccess () {
  submitSuccessMessage.remove();
  overlay.classList.remove('overlay--active');
  body.style.overflow = 'scroll';
  document.removeEventListener('keydown', documentKeydownHandler);
  document.removeEventListener('click', documentClickHandler);
}

export {onSubmitSuccess};
