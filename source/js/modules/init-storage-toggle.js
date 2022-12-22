const toggler = () => {
  const toggle = document.querySelector('.toggle');

  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('toggle--active');
    })
  }
}

export {toggler};
