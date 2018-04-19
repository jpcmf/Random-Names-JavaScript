;(function() {
  'use strict';

  function getElement(selector) {
    return document.querySelector(selector);
  }

  var $name1 = getElement('[data-js="name1"]');
  var $name2 = getElement('[data-js="name2"]');
  var $letterNumbers = getElement('[data-js="letterNumbers"]');
  var $btnGenerate = getElement('[data-js="btnGenerate"]');
  var $btnClear = getElement('[data-js="btnClear"]');
  var $result = getElement('[data-js="result"]');

  function randomNames() {
    var result = '';
    var names = $name1.value.trim() + $name2.value.trim();
    var num = $letterNumbers.value;

    for(var i = 0; i < num; i++) {
      result += names.charAt(Math.floor(Math.random() * names.length));
    }
    return result;
  }

  $btnGenerate.addEventListener('click', function(e) {
    e.preventDefault();
    $result.textContent = randomNames();
  }, false);

  $btnClear.addEventListener('click', function(e) {
    e.preventDefault();
    $name1.value = '';
    $name2.value = '';
    $letterNumbers.value = '';
    $result.textContent = '';
  }, false);

})();
