const initDadata = () => {
  $('.address').suggestions({
    token: 'd61dce75456f3e55cbfe29a13f919ce584208694',
    type: 'ADDRESS',
    onSelect: function (suggestion) {
      console.log(suggestion);
    }
  });
}

export {initDadata};

