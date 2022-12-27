const countChar = () => {
  const text = document.querySelector('#comment-area');
  const counter = document.querySelector('#counter');

  function onInput(evt) {
    const length = evt.target.value.length;
    counter.textContent = length;
}

  text.addEventListener('input', onInput);
}

export {countChar};
