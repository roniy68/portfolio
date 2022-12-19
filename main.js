const divMenu = document.querySelector('.nav-menu');
const crossButton = document.querySelector('.cross-button');
const hamburgerButton = document.querySelector('.fa-bars');

const openMenu = () => {
    divMenu.classList.toggle('show');
};

crossButton.addEventListener('click', () => {
    openMenu();
});

hamburgerButton.addEventListener('click', () => {
    openMenu();
});

$('.nav-menu li a').on('click', () => {
    $('#cross-button').click();
});