import { onSubmitSuccess } from './alerts';
import { form } from './data';

const manageForm = () => {
  const btnSubmit = form.querySelector('#button-submit');
  btnSubmit.disabled = true;
  btnSubmit.classList.add('button--disabled');

  function getFormElements(formNode) {
    const { elements } = formNode
    const data = new FormData()

    Array.from(elements)
      .filter((item) => !!item.name)
      .forEach((element) => {
        const { name, type } = element
        const value = type === 'radio' ? element.checked + ` ${element.value}` : element.value;

        data.append(name, value)
      })

    console.log(Array.from(data.entries()));
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    getFormElements(form);
    onSubmitSuccess();
  }

  function checkValidity(evt) {
    const formNode = evt.target.form;
    const isValid = formNode.checkValidity()

    if (!isValid) {
      btnSubmit.disabled = true;
      btnSubmit.classList.add('button--disabled');
    } else {
      btnSubmit.disabled = false;
      btnSubmit.classList.remove('button--disabled');
    }
  }

  if (form) {
    form.addEventListener('input', checkValidity);
    form.addEventListener('submit', handleFormSubmit);
  }
}

export { manageForm };
