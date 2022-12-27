import { onSubmitSuccess } from "./alerts";
import { form } from "./data";

const manageForm = (collection) => {
  collection.addEventListener('click', (evt) => {
    const targ = evt.target;
    // console.log(targ.content);
    const inputs = collection.querySelectorAll('.radio-js')

    function clearAll () {
      inputs.forEach((item) => {
        item.removeAttribute('checked', '');
      })
    }

    if (targ.tagName == 'input') {
      if (!targ.hasAttribute('checked', '')) {
        clearAll()
        targ.setAttribute('checked', '');
      }
    }
  })

  if (form) {
    form.addEventListener('submit', () => {
      onSubmitSuccess();
    })
  }
}

export { manageForm };


