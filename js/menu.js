const burgerMenu = document.querySelector('.header__menu');
const burgerMenuOpen = document.querySelector('.burger-menu__open');
const burgerMenuClose = document.querySelector('.menu-header__icon-close');
const navLinks = document.querySelectorAll('a[href*="#"]');
const body = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBurgerMenu();
  }
};

function openBurgerMenu() {
  burgerMenu.classList.add('active');
  body.classList.add('fixed-page');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBurgerMenu() {
  burgerMenu.classList.remove('active');
  body.classList.remove('fixed-page');
  document.removeEventListener('keydown', onDocumentKeydown);
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeBurgerMenu);
  link.addEventListener('click', function(evt) {
    evt.preventDefault();
    const id = link.getAttribute('href').substr(1);
      
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

burgerMenuOpen.addEventListener('click', openBurgerMenu);

burgerMenuClose.addEventListener('click', closeBurgerMenu);

