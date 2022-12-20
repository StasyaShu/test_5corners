const validateNameSurname = () => {
  const inputName = document.querySelector('#name');
  const inputSurname = document.querySelector('#surname');

  inputName.addEventListener('invalid', () => {
    if (inputName.validity.valueMissing) {
      inputName.setCustomValidity('Введите пожалуйста Ваше имя');
      inputName.classList.add('input--invalid');
    } else if (inputName.validity.patternMismatch) {
      inputName.setCustomValidity('Имя должно состоять из букв русского или английского алфавита');
      inputName.classList.add('input--invalid');
    }
  })

  inputSurname.addEventListener('invalid', () => {
    if (inputSurname.validity.valueMissing) {
      inputSurname.setCustomValidity('Введите пожалуйста Вашу фамилию');
      inputSurname.classList.add('input--invalid');
    } else if (inputSurname.validity.patternMismatch) {
      inputSurname.setCustomValidity('Фамилия должна состоять из букв русского или английского алфавита');
      inputSurname.classList.add('input--invalid');
    }
  })
}
