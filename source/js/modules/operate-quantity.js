const operateQuantity = (count) => {
  const btnReduce = count.querySelector('[data-reduce]');
  const btnAdd = count.querySelector('[data-add]');
  const valueField = count.querySelector('.quantity__value');
  const priceStart = count.querySelectorAll('.price-start');
  const priceTotal = count.querySelectorAll('.price-total');

  priceStart.forEach(el => {
    const priceStartValue = parseInt(el.textContent);
    const priceStartValueFormatted = priceStartValue.toLocaleString('ru-RU');
    el.textContent = priceStartValueFormatted;
  })

  // TODO: убери эту функцию и не отрисовывай вначале
  priceTotal.forEach(el => {
    const priceTotalValue = parseInt(el.textContent);
    const priceTotalValueFormatted = priceTotalValue.toLocaleString('ru-RU');
    el.textContent = priceTotalValueFormatted;
  })

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

    const startPrices = []

    priceStart.forEach(el => {
      const item = parseInt(el.textContent);
      startPrices.push(item);
    });

    startPrices.forEach(el => {
      const res = el * value;

      priceTotal.forEach(item => {

        item = res;
        console.log(item);
        const priceTotalValue = parseInt(item.textContent);
        const priceTotalValueFormatted = priceTotalValue.toLocaleString('ru-RU');
        item.textContent = priceTotalValueFormatted;
      })
    })

  })
}

export { operateQuantity };
