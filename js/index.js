window.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu__button');
    const menu = document.querySelector('.header-content-bottom');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuButton.classList.toggle('active');
    }); 
});