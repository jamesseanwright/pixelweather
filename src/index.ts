import App from './App';
import MetadataView from './views/MetadataView';
import SearchFormView from './views/SearchFormView';

const appElement = document.body.querySelector('.app');
const searchFormElement = appElement.querySelector<HTMLFormElement>('.search-form');
const metaDataElement = appElement.querySelector('.metadata');
const canvas = document.body.querySelector<HTMLCanvasElement>('#output');
const context = canvas.getContext('2d');
const searchFormView = new SearchFormView(searchFormElement);
const metadataView = new MetadataView(metaDataElement);
const app = new App(context, searchFormView, metadataView);

context.imageSmoothingEnabled = false;

const loop = () => {
    requestAnimationFrame(loop);
    app.next();
};

loop();
