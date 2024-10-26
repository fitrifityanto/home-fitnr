const menuMobile = document.getElementById('menu-mobile');
const hiddenBox = document.getElementById('hiddenBox');

const iconBar = document.getElementById('mobile-icon').firstElementChild;
const iconClose = document.getElementById('mobile-icon').lastElementChild;

iconBar.addEventListener('click', () => {
  menuMobile.style.display = 'block';
  iconBar.style.display = 'none';
  iconClose.style.display = 'block';
  hiddenBox.style.display = 'block';
});

iconClose.addEventListener('click', () => {
  menuMobile.style.display = 'none';
  iconBar.style.display = 'block';
  iconClose.style.display = 'none';
  hiddenBox.style.display = 'none';
});