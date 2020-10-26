const newsSliderHandler = () => {
  const bigNewsCardWidth = 437;
  const smallNewsCardWidth = 352;

  let newsCardWidth = bigNewsCardWidth;
  let widthMultiplier = 0;

  const newsContainer = document.querySelector('.js-news-container');

  const nextButton = document.querySelector('.js-news-next');
  const prevButton = document.querySelector('.js-news-prev');
  const allCards = document.querySelectorAll('.js-news-card');

  const mediaTiny = window.matchMedia('(max-width: 600px)');

  let currentCard = document.querySelector('.js-current-card');

  if (mediaTiny.matches) {
    newsCardWidth = smallNewsCardWidth;
  }

  nextButton.addEventListener('click', () => {
    if (currentCard.nextElementSibling) {
      widthMultiplier++;
      allCards.forEach(element => {
        element.style.left = -(newsCardWidth * widthMultiplier);
      });
      currentCard.classList.remove('js-current-card');
      currentCard.nextElementSibling.classList.add('js-current-card');
      currentCard = document.querySelector('.js-current-card');
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentCard.previousElementSibling) {
      widthMultiplier--;
      allCards.forEach(element => {
        element.style.left = -(newsCardWidth * widthMultiplier);
      });
      currentCard.classList.remove('js-current-card');
      currentCard.previousElementSibling.classList.add('js-current-card');
      currentCard = document.querySelector('.js-current-card');
    }
  });

  let startTouchPos = null;

  newsContainer.addEventListener('touchstart', event => {
    startTouchPos = event.touches[0].clientX;
  });

  newsContainer.addEventListener('touchend', event => {
    let endTouchPos = event.changedTouches[0].clientX;

    let diffTouchPos = Math.abs(startTouchPos - endTouchPos);

    if (startTouchPos > endTouchPos && diffTouchPos > 20) {
      if (currentCard.nextElementSibling) {
        widthMultiplier++;
        allCards.forEach(element => {
          element.style.left = -(newsCardWidth * widthMultiplier);
        });
        currentCard.classList.remove('js-current-card');
        currentCard.nextElementSibling.classList.add('js-current-card');
        currentCard = document.querySelector('.js-current-card');
      }
    }

    if (startTouchPos < endTouchPos && diffTouchPos > 20) {
      if (currentCard.previousElementSibling) {
        widthMultiplier--;
        allCards.forEach(element => {
          element.style.left = -(newsCardWidth * widthMultiplier);
        });
        currentCard.classList.remove('js-current-card');
        currentCard.previousElementSibling.classList.add('js-current-card');
        currentCard = document.querySelector('.js-current-card');
      }
    }
  });
};
