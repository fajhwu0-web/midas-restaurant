let searchButton = document.querySelector('.header-search-btn');
let searchInput = document.querySelector('.header-search input');
let headerSearch = document.querySelector('.header-search');

searchButton.addEventListener('click', () => {
    searchInput.classList.add('active');
    searchButton.classList.add('active');
    searchButton.classList.remove('passive');
    searchInput.focus();
})

function closeSearch() {
    searchInput.classList.remove('active');
    searchButton.classList.remove('active');
    searchButton.classList.add('passive');
    searchInput.value = '';
}

document.addEventListener('click', (event) => {
    if (!headerSearch.contains(event.target)) {
        closeSearch();
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeSearch();
    }
});
