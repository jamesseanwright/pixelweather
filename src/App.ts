import SearchForm from './SearchForm';
import Result from './Result';
import ImageSprite from './outputObjects/ImageSprite';
import RectSprite from './outputObjects/RectSprite';

class App {
    private _context: CanvasRenderingContext2D;
    private _state: Result;

    constructor(context: CanvasRenderingContext2D, searchForm: SearchForm) {
        this._context = context;
        searchForm.onResult = this.setState;
    }

    public render() {
        const background = new RectSprite( // TODO: rename RectSprite
            this._context,
            'skyblue',
            0,
            0,
            this._context.canvas.width,
            this._context.canvas.height,
            0,
            0,
        );

        const person = new ImageSprite(
            this._context,
            '/images/person-1.png',
            80,
            80,
            48,
            48,
            0,
            0,
        );

        background.render();
        person.render();
    }

    private setState = (state: Result) => {
        this._state = state;
    }
}

export default App;
