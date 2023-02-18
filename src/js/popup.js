'use strict';

let popupButton = document.querySelector('.offices__top_left');
let popup = document.querySelector('.popup-offices');

let popupCities = document.querySelectorAll('.popup-offices__item');
let popupBody = document.querySelector('.popup-offices__body');

const popupper = () => {
  popup.classList.toggle('_active');
  popupButton.classList.toggle('_active');
  //   document.body.classList.toggle('_ovh');
};

const toOpenRegion = (event) => {
  let elem = event.target.closest('.popup-offices__item');
  console.log(elem, 'elem');
  for (let i = 0; i < popupBody.children.length; i++) {
    if (elem == popupBody.children[i]) {
      popupBody.children[i].querySelector('.popup-offices__cities').classList.toggle('_active');
    }
  }
};

popupButton.addEventListener('click', popupper);
popupBody.addEventListener('click', (event) => toOpenRegion(event));
