;(function() {
  'use strict';

  function getElement(selector) {
    return document.querySelector(selector);
  }

  // var $name1 = new DOM('[data-js="name1"]');
  // var $name2 = new DOM('[data-js="name2"]');
  // var $letterNumbers = new DOM('[data-js="letterNumbers"]');
  // var $btnGenerate = new DOM('[data-js="btnGenerate"]');
  // var $btnClear = new DOM('[data-js="btnClear"]');
  // var $result = new DOM('[data-js="result"]');

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(eventType, callback, false);
    });
  };

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

  // $btnGenerate.on('click', function(e) {
  //   e.preventDefault();
  //   $result.textContent = randomNames();
  // });

  $btnGenerate.addEventListener('click', function(e) {
    e.preventDefault();
    $result.textContent = randomNames();
  }, false);

  // $btnClear.on('click', function(e) {
  //   e.preventDefault();
  //   $name1.value = '';
  //   $name2.value = '';
  //   $letterNumbers.value = '';
  //   $result.textContent = '';
  // });

  $btnClear.addEventListener('click', function(e) {
    e.preventDefault();
    $name1.value = '';
    $name2.value = '';
    $letterNumbers.value = '';
    $result.textContent = '';
  }, false);

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  var $inputs = new DOM('input');
  $inputs.forEach(function(item) {
    item.addEventListener('input', function() {
      item.value.length == 0 ? $btnGenerate.disabled = true : $btnGenerate.disabled = false;
    });
  });
})();
