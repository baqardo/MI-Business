const burger = document.querySelector('.burger');

const mobileNavHandler = () => {
  let isNavInvisible = true;
  const nav = document.querySelector('.js-nav');
  const mobileNav = document.querySelector('.js-home__nav-mobile');
  const blur = document.querySelector('.js-blur');
  const burgerToggler = document.querySelector('.js-burger-toggler');

  burger.addEventListener('click', () => {
    if (isNavInvisible) {
      mobileNav.classList.add('home__nav-mobile-is-visible');
      blur.classList.add('blur__is-visible');
    } else {
      mobileNav.classList.remove('home__nav-mobile-is-visible');
      blur.classList.remove('blur__is-visible');
    }

    isNavInvisible = !isNavInvisible;
  });

  blur.addEventListener('click', () => {
    mobileNav.classList.remove('home__nav-mobile-is-visible');
    blur.classList.remove('blur__is-visible');

    burgerToggler.checked = false;
    isNavInvisible = !isNavInvisible;
  });

  [nav, mobileNav].forEach(element => {
    element.addEventListener('click', event => {
      if (!isNavInvisible && event.target.matches('.link')) {
        mobileNav.classList.remove('home__nav-mobile-is-visible');
        blur.classList.remove('blur__is-visible');

        burgerToggler.checked = false;
        isNavInvisible = !isNavInvisible;
      }
    });
  });
};
