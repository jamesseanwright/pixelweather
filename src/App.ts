import SearchFormView from './views/SearchFormView';
import MetadataView from './views/MetadataView';
import Result from './Result';
import ImageRenderable from './outputObjects/ImageRenderable';
import RectRenderable from './outputObjects/RectRenderable';
import Background from './outputObjects/Background';
import OutputObject from './outputObjects/OutputObject';
import Person from './outputObjects/Person';
import Cloud from './outputObjects/Cloud';
import Road from './outputObjects/Road';
import DropletGenerator from './outputObjects/DropletGenerator';
import Entity from './entities/Entity';

class App {
    private _metadataView: MetadataView;
    private _entities: Entity[];

    constructor(context: CanvasRenderingContext2D, searchForm: SearchFormView, metadata: MetadataView) {
        this._entities = [
            createBackground(context),
            createCloud(context, false, 720, 70, -0.5),
            createCloud(context, false, 400, 100, -0.75),
            createCloud(context, false, 150, 150, -1),
            createRoad(context, 0, 520),
            createPerson(context, '/images/person-1.png', 60, 450),
            createPerson(context, '/images/person-2.png', 110, 450),
            createPerson(context, '/images/person-3.png', 160, 450),
            createDropletGenerator(context, 'rgba(0, 0, 190, 0.6)', 5, 3),
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
        this._metadataView.update(result);

        for (const outputObject of this._outputObjects) {
            outputObject.setState(result);
        }
    }
}

export default App;
