const searchForm = document.body.querySelector<HTMLFormElement>('#search-form');
const searchInput = searchForm.querySelector<HTMLInputElement>('#search-input');
const canvas = document.body.querySelector<HTMLCanvasElement>('#output');
const context = canvas.getContext('2d');

searchForm.addEventListener('submit', e => {
    e.preventDefault();
});
