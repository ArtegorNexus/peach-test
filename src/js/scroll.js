'use strict';

const animItems = document.querySelectorAll('._anim-item');

window.addEventListener('scroll', animOnScroll);
function animOnScroll() {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight; // высота элемента
    const animItemOffset = offset(animItem).top; // отступ сверху
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart; // переменная высчитывает следующее значение: высота окна браузера - высота элемента, поделённое на количество "секций"
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if (
      pageYOffset > animItemOffset - animItemPoint &&
      pageYOffset < animItemOffset + animItemHeight
    ) {
      animItem.classList.add('_active');
    } else {
      if (!animItem.classList.contains('_no-anim-after')) {
        animItem.classList.remove('_active');
      }
    }
    // pageYOffset - значение проскролленых пикселей. Мы проверяем, чтоб оно было как бы ниже, чем
  }
}
function offset(elem) {
  const rect = elem.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }; // Функция для высчитывания отступа элемента от верхней границы кроссбраузерно
}

setTimeout(() => {
  animOnScroll();
}, 500);
