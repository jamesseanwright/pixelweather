import SearchFormView from './views/SearchFormView';
import MetadataView from './views/MetadataView';
import Result from './Result';
import ImageSprite from './outputObjects/ImageSprite';
import RectSprite from './outputObjects/RectSprite';
import Background from './outputObjects/Background';
import OutputObject from './outputObjects/OutputObject';
import Person from './outputObjects/Person';
import Cloud from './outputObjects/Cloud';
import Road from './outputObjects/Road';

class App {
    private _state: Result;
    private _metadataView: MetadataView;
    private _outputObjects: OutputObject[];

    constructor(context: CanvasRenderingContext2D, searchForm: SearchFormView, metadata: MetadataView) {
        this._outputObjects = [
            Background.clearSky(context),
            new Cloud(context, false, 720, 70, -0.5),
            new Cloud(context, false, 400, 100, -0.75),
            new Cloud(context, false, 150, 150, -1),
            new Road(context, 0, 520),
            new Person(context, '/images/person-1.png', 60, 450),
            new Person(context, '/images/person-2.png', 110, 450),
            new Person(context, '/images/person-3.png', 160, 450),
        ];

        this._metadataView = metadata;

        searchForm.onResult = this.onResult;
    }

    public next() {
        for (const outputObject of this._outputObjects) {
            outputObject.next();
        }
    }

    private onResult = (result: Result) => {
        this._state = result;
        this._metadataView.update(result);
    }
}

export default App;
