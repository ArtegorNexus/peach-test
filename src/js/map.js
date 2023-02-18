'use strict';

let map = document.querySelector('.map-offices__body');
let mapImg = map.querySelector('img');
let mapMenu = document.querySelector('.menu-offices-top__items');

let regions = document.querySelector('.menu-offices-top__items');
let cities = document.querySelectorAll('.map-offices__city');
let regionsName = ['msk', 'cntr', 'sevzap', 'south', 'vlg', 'ural', 'sbr', 'dv'];
let nowReg = 0;

console.log(cities[1]);

const mapSwiper = (event) => {
  if (map.clientWidth < mapImg.offsetWidth) {
    event.preventDefault();
    map.scrollLeft += event.deltaY;
    mapImg.scrollLeft += event.deltaY;
    mapMenu.scrollLeft += event.deltaY;
  }
};

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

map.addEventListener('wheel', (event) => mapSwiper(event));
regions.addEventListener('click', (event) => toChangeRegion(event));
