import SearchForm from './SearchForm';
import Result from './Result';
import ImageSprite from './outputObjects/ImageSprite';
import RectSprite from './outputObjects/RectSprite';
import Background from './outputObjects/Background';
import Renderable from './outputObjects/Renderable';

class App {
    private _state: Result;
    private _renderables: Renderable[];

    constructor(context: CanvasRenderingContext2D, searchForm: SearchForm) {
        this._renderables = [
            Background.clearSky(context),

            new ImageSprite(
                context,
                '/images/person-1.png',
                80,
                80,
                48,
                48,
                0,
                0,
            ),
        ];

        searchForm.onResult = this.setState;
    }

    public render() {
        for (const renderable of this._renderables) {
            renderable.render();
        }
    }

    private setState = (state: Result) => {
        this._state = state;
    }
}

export default App;
