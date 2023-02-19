'use strict';

let map = document.querySelector('.map-offices__body');
let mapImg = map.querySelector('img');
let mapMenu = document.querySelector('.menu-offices-top__items');

let topMenu = document.querySelector('.menu-offices-top');
let posMapStart = 0;
let posMenuStart = 0;

let regions = document.querySelector('.menu-offices-top__items');
let cities = document.querySelectorAll('.map-offices__city');
let regionsName = ['msk', 'cntr', 'sevzap', 'south', 'vlg', 'ural', 'sbr', 'dv'];
let nowReg = 0;

console.log(cities[1]);

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

const toSwipeMap = (event) => {
  if (map.clientWidth - map.scrollWidth < 0) {
    event.preventDefault();
    map.scrollLeft += posMapStart - event.changedTouches[0].clientX;
    posMapStart = event.changedTouches[0].clientX;
  }
};

const toSwipeMenu = (event) => {
  if (topMenu.clientWidth - topMenu.scrollWidth < 0) {
    event.preventDefault();
    topMenu.scrollLeft += posMenuStart - event.changedTouches[0].clientX;
    posMenuStart = event.changedTouches[0].clientX;
  }
};

const mapScrollByWheel = (event) => {
  if (map.clientWidth - map.scrollWidth < 0) {
    event.preventDefault();
    map.scrollLeft += event.deltaY;
  }
};

regions.addEventListener('click', (event) => toChangeRegion(event));

map.addEventListener('wheel', (event) => mapScrollByWheel(event));

map.addEventListener('touchmove', (event) => toSwipeMap(event));
map.addEventListener('touchstart', (event) => (posMapStart = event.changedTouches[0].clientX));

topMenu.addEventListener('touchmove', (event) => toSwipeMenu(event));
topMenu.addEventListener('touchstart', (event) => (posMenuStart = event.changedTouches[0].clientX));
