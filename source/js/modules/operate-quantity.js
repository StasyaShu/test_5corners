const operateQuantity = (count) => {
  const btnReduce = count.querySelector('[data-reduce]');
  const btnAdd = count.querySelector('[data-add]');
  const valueField = count.querySelector('.quantity__value');
  let value = parseFloat(valueField.value, 10);

  btnReduce.addEventListener('click', () => {
    if (value > 1) {
      value--;
      valueField.value = value;
    } else {
      return 1;
    }
  })

  btnAdd.addEventListener('click', () => {
    value++;
    valueField.value = value;
  })
}

export {operateQuantity};
