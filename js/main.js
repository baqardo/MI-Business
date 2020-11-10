mobileNavHandler();
newsSliderHandler();

//! Section Scroll

// let timerId;
// const scrollElements = [...document.querySelectorAll('.js-scroll')];
// console.log(scrollElements);
// let counter = 0;
// var throttleFunction = function (func, delay, event) {
//   if (timerId) {
//     return;
//   }
//   if (event.deltaY > 0) {
//     if (counter < scrollElements.length - 1) {
//       counter++;
//     }
//   } else {
//     if (counter > 0) {
//       counter--;
//     }
//   }

//   timerId = setTimeout(function () {
//     func(scrollElements[counter], event);
//     timerId = undefined;
//   }, delay);
// };

// const scroll = (element, event) => {
//   element.scrollIntoView();
// };

// var isScrolling;

// window.addEventListener('wheel', function (event) {
//   throttleFunction(scroll, 400, event);
// });
