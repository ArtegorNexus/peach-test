'use strict';

let sliderItems = document.querySelector('.corp-life__slides');
let sliderMenu = document.querySelector('.corp-life__menu');
let leftArrow = document.querySelector('.corp-life__left-arrow');
let rightArrow = document.querySelector('.corp-life__right-arrow');
let counter = 0;
let slideStartX = 0;
let slideEndX = 0;

const changeSlide = (index) => {
  sliderItems.children[index].classList.toggle('_active');
  sliderMenu.children[index].classList.toggle('_active');
  sliderItems.children[counter].classList.toggle('_active');
  sliderMenu.children[counter].classList.toggle('_active');
  counter = index;
};

const swiper = (start, end) => {
  if (window.innerWidth < 768) {
    start - end < 0 ? prevSlide() : nextSlide();
  }
};

const handleStart = (event) => {
  slideStartX = event.changedTouches[0].screenX;
};
const handleEnd = (event) => {
  slideEndX = event.changedTouches[0].screenX;
  swiper(slideStartX, slideEndX);
};

const nextSlide = () => {
  if (counter < sliderItems.children.length - 1) {
    changeSlide(counter + 1);
  } else {
    changeSlide(0);
  }
};

const prevSlide = () => {
  if (counter == 0) {
    changeSlide(sliderItems.children.length - 1);
  } else {
    changeSlide(counter - 1);
  }
};

const menuChanger = (event) => {
  let slide = event.target;
  if (slide.closest('.corp-life__menu-item')) {
    for (let i = 0; i < sliderMenu.children.length; i++) {
      if (slide == sliderMenu.children[i]) {
        changeSlide(i);
        console.log(i);
      }
    }
  }
};

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);
sliderMenu.addEventListener('click', (event) => menuChanger(event));
sliderItems.addEventListener('touchstart', (event) => handleStart(event));
sliderItems.addEventListener('touchend', (event) => handleEnd(event));
