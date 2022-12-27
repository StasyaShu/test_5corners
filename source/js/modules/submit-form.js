import {onSubmitSuccess} from './alerts';
import {form} from './data';

const manageForm = () => {

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

  if (form) {
    form.addEventListener('submit', handleFormSubmit);
 }
}

export {manageForm};
