import SearchForm from './SearchForm';
import App from './App';
import Metadata from './Metadata';

const appElement = document.body.querySelector('.app');
const searchFormElement = appElement.querySelector<HTMLFormElement>('.search-form');
const metaDataElement = appElement.querySelector('.app__metadata');
const canvas = document.body.querySelector<HTMLCanvasElement>('#output');
const context = canvas.getContext('2d');
const searchForm = new SearchForm(searchFormElement);
const metadata = new Metadata(metaDataElement);
const app = new App(context, searchForm, metadata);

context.imageSmoothingEnabled = false;

const loop = () => {
    app.next();
    requestAnimationFrame(loop);
};

requestAnimationFrame(loop);
