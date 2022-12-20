const divMenu = document.querySelector('.nav-menu');
const crossButton = document.querySelector('.cross-button');
const hamburgerButton = document.querySelector('.fa-bars');
const navLink = document.querySelector('.nav-link');

const openMenu = () => {
  divMenu.classList.toggle('show');
};

crossButton.addEventListener('click', () => {
  openMenu();
});

hamburgerButton.addEventListener('click', () => {
  openMenu();
});

navLink.addEventListener('click', () => {
  openMenu();
});