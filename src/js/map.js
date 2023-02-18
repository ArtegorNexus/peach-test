'use strict';

let map = document.querySelector('.map-offices__body');
let mapImg = map.querySelector('img');
let mapMenu = document.querySelector('.menu-offices-top__items');
let slideStartX = 0;
let slideEndX = 0;

let regions = document.querySelector('.menu-offices-top__items');
let cities = document.querySelectorAll('.map-offices__city');
let regionsName = ['msk', 'cntr', 'sevzap', 'south', 'vlg', 'ural', 'sbr', 'dv'];
let nowReg = 0;

console.log(cities[1]);

// const mapSwiper = (start, end) => {
//   let scrollPx = start - end;
//   if (map.clientWidth < mapImg.offsetWidth) {
//     event.preventDefault();
//     map.scrollLeft += scrollPx;
//     mapImg.scrollLeft += scrollPx;
//     mapMenu.scrollLeft += scrollPx;
//   }
// };

// const handleStart = (event) => {
//   slideStartX = event.changedTouches[0].screenX;
// };
// const handleEnd = (event) => {
//   slideEndX = event.changedTouches[0].screenX;
//   mapSwiper(slideStartX, slideEndX);
// };

const citiesChanger = (elem) => {
  let bySort = regionsName[nowReg - 1];
  if (nowReg - 1 > -1) {
    for (let i = 0; i < cities.length; i++) {
      if (!cities[i].classList.contains('_active')) {
        cities[i].classList.add('_active');
      }
      if (!cities[i].classList.contains(bySort)) {
        cities[i].classList.remove('_active');
      }
    }
  } else {
    for (let i = 0; i < cities.length; i++) {
      if (!cities[i].classList.contains('_active')) {
        cities[i].classList.add('_active');
      }
    }
  }
};

const toChangeRegion = (event) => {
  for (let i = 0; i < regions.children.length; i++) {
    if (event.target == regions.children[i]) {
      regions.children[nowReg].classList.toggle('_active');
      regions.children[i].classList.toggle('_active');
      nowReg = i;
      citiesChanger(regions.children[i]);
    }
  }
};

// map.addEventListener('touchstart', (event) => handleStart(event));
// map.addEventListener('touchend', (event) => handleEnd(event));
regions.addEventListener('click', (event) => toChangeRegion(event));
