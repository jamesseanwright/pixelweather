import SearchFormView from './views/SearchFormView';
import MetadataView from './views/MetadataView';
import Result from './Result';
import Entity from './entities/Entity';
import createCloud from './entities/cloud';
import createBackground from './entities/background';
import createPerson from './entities/person';
import createRoad from './entities/road';

class App {
    private _metadataView: MetadataView;
    private _entities: Entity[];

    constructor(context: CanvasRenderingContext2D, searchForm: SearchFormView, metadata: MetadataView) {
        this._entities = [
            createBackground(context),
            createCloud(context, 720, 70, -0.5),
            createCloud(context, 400, 100, -0.75),
            createCloud(context, 150, 150, -1),
            createRoad(context, 0, 520),
            createPerson(context, '/images/person-1.png', 60, 450),
            createPerson(context, '/images/person-2.png', 110, 450),
            createPerson(context, '/images/person-3.png', 160, 450),
            // createDropletGenerator(context, 'rgba(0, 0, 190, 0.6)', 5, 3),
        ];

        this._metadataView = metadata;

        searchForm.onResult = this.onResult;
    }

    public next() {
        for (const outputObject of this._entities) {
            outputObject.next();
        }
    }

    private onResult = (result: Result) => {
        this._metadataView.update(result);

        // for (const outputObject of this._entities) {
        //     outputObject.setState(result);
        // }
    }
}

export default App;
