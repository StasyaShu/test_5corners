import { form } from './data';

const validateInput = () => {
  const requiredEls = form.querySelectorAll('[required]');
  const inputName = form.querySelector('#name');
  const inputSurname = form.querySelector('#surname');
  const inputEmail = form.querySelector('#email');
  const inputPhone = form.querySelector('#phone');
  const inputAddress = form.querySelector('#suggest');
  const inputPromo = form.querySelector('#promo');
  const btnPromoApply = form.querySelector('#promo-apply');
  const btnAddress = form.querySelector('#button-address');

  requiredEls.forEach((input) => {
    input.onblur = function () {
      if (input.validity.valueMissing || input.validity.patternMismatch) {
        input.classList.add('input--invalid');
        const error = this.parentNode.querySelector('.error');

        if (input === inputName) {
          error.innerHTML = 'Пожалуйста, введите Ваше имя.';
        } else if (input === inputSurname) {
          error.innerHTML = 'Пожалуйста, введите Вашу фамилию.';
        } else if (input === inputEmail) {
          error.innerHTML = 'Пожалуйста, введите адрес Вашей электронной почты по форме: login@post.__';
        } else if (input === inputPhone) {
          error.innerHTML = 'Пожалуйста, введите Ваш номер телефона.';
        } else if (input === inputAddress) {
          error.innerHTML = 'Пожалуйста, введите Ваш адрес.';
        }
      }
    };

    input.onfocus = function () {
      if (this.classList.contains('input--invalid')) {
        const error = this.parentNode.querySelector('.error');
        this.classList.remove('input--invalid');
        error.innerHTML = '';
      }
    }
  })

  inputPromo.addEventListener('input', () => {
    if (inputPromo.value == '') {
      btnPromoApply.style.display = 'none';
      inputPromo.classList.remove('input--promo');
    } else {
      btnPromoApply.style.display = 'block';
      inputPromo.classList.add('input--promo');
    }
    inputPromo.classList.remove('input--invalid');
    const error = inputPromo.parentNode.querySelector('.error');
    error.innerHTML = '';
    error.classList.remove('error--ok');
  })

  inputAddress.addEventListener('focus', () => {
    form.querySelector('label[for="suggest"]').style.display = 'block';
  })
  inputAddress.addEventListener('blur', () => {
    form.querySelector('label[for="suggest"]').style.display = 'none';
  })
  inputAddress.addEventListener('input', () => { inputAddress.value == '' ? btnAddress.style.display = 'none' : btnAddress.style.display = 'block' });

  if (btnPromoApply) {
    btnPromoApply.addEventListener('click', () => {
      const promoRegExp = new RegExp('[0-9]{1}[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{2}');
      const promoValue = inputPromo.value;
      const error = inputPromo.parentNode.querySelector('.error');

      if (promoRegExp.test(promoValue)) {
        error.innerHTML = `${promoValue} - купон применен.`;
        error.classList.add('error--ok');
      } else {
        error.innerHTML = `${promoValue} - купон не найден`;
        inputPromo.classList.add('input--invalid');
      }
    })
  }
}

export { validateInput };
