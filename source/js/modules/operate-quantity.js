const operateQuantity = (count) => {
  const btnReduce = count.querySelector('[data-reduce]');
  const btnAdd = count.querySelector('[data-add]');
  const valueField = count.querySelector('.quantity__value');
  const numbers = count.querySelectorAll('[data-format-number]');
  const priceStartOld = count.querySelector('.price-start-old');
  const priceStartNow = count.querySelector('.price-start-now');
  const priceTotalOld = count.querySelector('.price-total-old');
  const priceTotalNow = count.querySelector('.price-total-now');

  numbers.forEach(el => {
    const int = parseFloat(el.textContent);
    const intFormatted = int.toLocaleString('ru-RU');
    el.textContent = intFormatted;
  })

  let value = parseFloat(valueField.value, 10);

  btnAdd.addEventListener('click', () => {
    value++;
    valueField.value = value;

    if (priceStartOld) {
      const priceStartOldInt = parseInt(priceStartOld.textContent.replace(/\s+/g, ''), 10);
      const res1 = priceStartOldInt * value;
      const res1Formatted = res1.toLocaleString('ru-RU');
      priceTotalOld.textContent = res1Formatted;
    }

    const priceStartNowInt = parseInt(priceStartNow.textContent.replace(/\s+/g, ''), 10);
    const res2 = priceStartNowInt * value;
    const res2Formatted = res2.toLocaleString('ru-RU');
    priceTotalNow.textContent = res2Formatted;
  })

  btnReduce.addEventListener('click', () => {
    if (value > 1) {
      value--;
      valueField.value = value;

      if (priceTotalOld) {
        const priceTotalOldInt = parseInt(priceTotalOld.textContent.replace(/\s+/g, ''), 10);
        const priceStartOldInt = parseInt(priceStartOld.textContent.replace(/\s+/g, ''), 10);
        const res1 = priceTotalOldInt - priceStartOldInt;
        const res1Formatted = res1.toLocaleString('ru-RU');
        priceTotalOld.textContent = res1Formatted;
      }

      const priceStartNowInt = parseInt(priceStartNow.textContent.replace(/\s+/g, ''), 10);
      const priceTotalNowInt = parseInt(priceTotalNow.textContent.replace(/\s+/g, ''), 10);
      const res2 = priceTotalNowInt - priceStartNowInt;
      const res2Formatted = res2.toLocaleString('ru-RU');
      priceTotalNow.textContent = res2Formatted;

    } else {
      return 1;
    }
  })
}

export { operateQuantity };
