window.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu__button');
    const menu = document.querySelector('.header-content-bottom');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuButton.classList.toggle('active');
    }); 

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});