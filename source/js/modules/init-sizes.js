const chooseSize = (card) => {
  const sizeField = card.querySelector('.size');
  const items = sizeField.querySelectorAll('.size__item');

  function deleteActiveClass() {
    items.forEach(item => {
      item.classList.remove('size__item--active');
    })
  }

  sizeField.addEventListener('click', evt => {
    const targ = evt.target;

    if (!targ.classList.contains('size__item')) return;

    if (targ.classList.contains('size__item--active')) {
      deleteActiveClass();
    } else {
      deleteActiveClass();
      targ.classList.add('size__item--active')
    }
  })
}

export {chooseSize};
