import SearchForm from './SearchForm';
import Result from './Result';
import ImageSprite from './ImageSprite';

class App {
    private _context: CanvasRenderingContext2D;
    private _state: Result;

    constructor(context: CanvasRenderingContext2D, searchForm: SearchForm) {
        this._context = context;
        searchForm.onResult = this.setState;
    }

    public render() {
        const person = new ImageSprite(
            this._context,
            '/images/person-1.png',
            80,
            80,
            48,
            48,
        );

        person.render();
    }

    private setState = (state: Result) => {
        this._state = state;
    }
}

export default App;
