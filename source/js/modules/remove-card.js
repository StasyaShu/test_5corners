const deleteGoods = (card) => {
  const deleteBtn = card.querySelector('[data-button-delete]');

  if(deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      card.remove();
    })
  }
}

export {deleteGoods};
