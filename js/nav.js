'use strict';

function toggleMainNav() {
    const mainNav = document.querySelector('.site-list'),
          openBtn = document.querySelector('.main-nav__button-open'),
          closeBtn = document.querySelector('.site-list__close');

    const sidepanel = document.querySelector('.sidepanel'),
          body = document.querySelector('body');

    openBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        mainNav.classList.remove('site-list--closed');
        mainNav.classList.add('site-list--opened');
        sidepanel.style.zIndex = '-1';
        body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        mainNav.classList.remove('site-list--opened');
        mainNav.classList.add('site-list--closed');
        sidepanel.style.zIndex = '';
        body.style.overflow = '';
    });
}

toggleMainNav();