const putMask = () => {
  $("#phone").mask("+7 (999) 999-99-99");
  $("#email").inputmask({
    mask: "*{3,20}@*{3,20}.*{2,7}",
    showMaskOnHover: false,
    showMaskOnFocus: true,
    clearMaskOnLostFocus: true
  });
};

export {putMask};
