import SearchForm from './SearchForm';
import App from './App';

const searchFormElement = document.body.querySelector<HTMLFormElement>('#search-form');
const canvas = document.body.querySelector<HTMLCanvasElement>('#output');
const context = canvas.getContext('2d');
const searchForm = new SearchForm(searchFormElement);
const app = new App(context, searchForm);

context.imageSmoothingEnabled = false;

const loop = () => {
    app.render();
    requestAnimationFrame(loop);
};

requestAnimationFrame(loop);
