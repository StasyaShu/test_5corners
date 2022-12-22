const validateInput = () => {
  const form = document.querySelector('#order-form');
  const requiredEls = form.querySelectorAll('[required]');

  const inputName = form.querySelector('#name');
  const inputSurname = form.querySelector('#surname');
  const inputEmail = form.querySelector('#email');
  const inputPhone = form.querySelector('#phone');
  const inputAddress = form.querySelector('#address');
  // const buttonPromoApply = form.querySelector('#promo-apply');

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
          error.innerHTML = 'Пожалуйста, введите адрес Вашей электронной почты.';
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

  // if (buttonPromoApply) {
  //   buttonPromoApply.addEventListener('click', () => {
  //     const inputPromo = buttonPromoApply.parentNode.querySelector('#promo');
  //     const error = buttonPromoApply.parentNode.querySelector('.error');
  //     /[a-z]/i.test(inputPromo.value) ? error.innerHTML = `${inputPromo.value} - купон применен.` : error.innerHTML = `${inputPromo.value} - купон не найден`
  //   })
  // }
}

export { validateInput };
