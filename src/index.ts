const searchForm = document.body.querySelector<HTMLFormElement>('#search-form');
const searchInput = searchForm.querySelector<HTMLInputElement>('#search-input');
const canvas = document.body.querySelector<HTMLCanvasElement>('#output');
const context = canvas.getContext('2d');

searchForm.addEventListener('submit', async e => {
    e.preventDefault();

    const { value } = searchInput;
    const response = await fetch(`/api/weather/${value}`);
    const result = await response.json();

    // tslint:disable-next-line:no-console
    console.log('******', JSON.stringify(result, null, 4));
});
