import SearchForm from './SearchForm';
import Result from './Result';
import ImageSprite from './outputObjects/ImageSprite';
import RectSprite from './outputObjects/RectSprite';
import Background from './outputObjects/Background';
import OutputObject from './outputObjects/OutputObject';
import Person from './outputObjects/Person';
import Cloud from './outputObjects/Cloud';

class App {
    private _state: Result;
    private _outputObjects: OutputObject[];

    constructor(context: CanvasRenderingContext2D, searchForm: SearchForm) {
        this._outputObjects = [
            Background.clearSky(context),

            new Cloud(context, false, 30, 30),
            new Person(context, '/images/person-1.png', 80, 80),
            new Person(context, '/images/person-2.png', 130, 80),
            new Person(context, '/images/person-3.png', 180, 80),
        ];

        searchForm.onResult = this.setState;
    }

    public next() {
        for (const outputObject of this._outputObjects) {
            outputObject.next();
        }
    }

    private setState = (state: Result) => {
        this._state = state;
    }
}

export default App;
