const searchButton = document.querySelector('.search-button');
const searchBar = document.querySelector('.search-bar');

searchButton.addEventListener('click', () => {
  searchBar.classList.toggle('show');
});

const accountIcon = document.querySelector('.account-icon');
const accountDropdown = document.querySelector('.account-dropdown');

accountIcon.addEventListener('click', () => {
  accountDropdown.classList.toggle('show');
});