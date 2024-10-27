const menuMobile = document.getElementById('menuMobile');
const hiddenBox = document.getElementById('hiddenBox');

const iconBar = document.getElementById('mobileIcon').firstElementChild;
const iconClose = document.getElementById('mobileIcon').lastElementChild;


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