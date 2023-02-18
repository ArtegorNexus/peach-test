'use strict';

let arrows = document.querySelectorAll('.dirbuis__arrow');
let items = document.querySelector('.dirbuis__items');
let texts = document.querySelectorAll('.dirbuis__text');

const addActive = (event) => {
  let elem = event.target.closest('.dirbuis__item');
  for (let i = 0; i < items.children.length; i++) {
    if (elem.closest('.dirbuis__item') == items.children[i]) {
      items.children[i].classList.toggle('_active');
      arrows[i].classList.toggle('_active');
      texts[i].classList.toggle('_active');
    }
  }
};

items.addEventListener('click', (event) => addActive(event));
