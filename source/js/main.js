import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });

  const accordion = document.querySelectorAll('[data-name="accordion"]');

  const closeAllElements = function () {
    accordion.forEach(element => {
      element.classList.remove('is-open');
    });
  };

  accordion.forEach(element => {
    element
      .querySelector('.accordion__title')
      .addEventListener('click', () => {
        if (!element.classList.contains('is-open')) {
          closeAllElements();
        }
        element.classList.toggle('is-open');
      });
  });

  const mainScreenButton = document.querySelector('[data-name="main-screen-button"]');

  const changeButtonText = () => {
    if (window.innerWidth < 768) {
      mainScreenButton.textContent = 'бесплатная консультация';
    } else {
      mainScreenButton.textContent = 'Получить бесплатную консультацию';
    }
  };

  changeButtonText();

  const catalogTitle = document.querySelector('[data-name="catalog-title"]');

  const changeTitleText = () => {
    if (window.innerWidth < 768) {
      catalogTitle.textContent = 'Товары и услуги Smart Device';
    } else {
      catalogTitle.textContent = 'Smart Device предлагает следующие товары и услуги';
    }
  }

  changeTitleText();

  window.addEventListener('resize', (e) => {
    changeButtonText();
    changeTitleText();
  });

  const showMoreButton = document.querySelector('[data-name="about-button"]');
  const moreText = document.querySelector('[data-name="about-text"]');
  let maxHeight = 170;

  const showMoreText = () => {
    if (window.innerWidth <= 1219 && window.innerWidth >= 768) {
      maxHeight = 255;
    } else if (window.innerWidth <= 767) {
      maxHeight = 205;
    }

    moreText.style.maxHeight = maxHeight + 'px';

    showMoreButton.addEventListener('click', () => {
      if (showMoreButton.textContent === 'Свернуть') {
        moreText.style.maxHeight = maxHeight + 'px';
        showMoreButton.textContent = 'Подробнее';
      } else {
        moreText.style.maxHeight = '100%';
        showMoreButton.textContent = 'Свернуть';
      }
    });
  };
  showMoreText();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)



