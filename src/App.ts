import SearchFormView from './views/SearchFormView';
import MetadataView from './views/MetadataView';
import Result from './Result';
import Entity from './entities/Entity';
import createCloud from './entities/cloud';
import createBackground from './entities/background';
import createPerson from './entities/person';
import createRoad from './entities/road';
import createDroplets from './entities/droplets';
import State from './State';

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
            createDroplets(context, 'rgba(0, 0, 190, 0.6)', 5, 3, 15, 5),
        ];

        this._metadataView = metadata;

        searchForm.onResult = this.onResult;
    }

    public next() {
        for (const entity of this._entities) {
            entity.next();
        }
    }

    private onResult = async (result: Result) => {
        const state = new State(result);

        this._metadataView.update(state);

        for (const entity of this._entities) {
            await entity.setState(state);
        }
    }
}

export default App;
