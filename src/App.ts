import SearchFormView from './views/SearchFormView';
import MetadataView from './views/MetadataView';
import Entity from './entities/Entity';
import createCloud from './entities/cloud';
import createBackground from './entities/background';
import createPerson from './entities/person';
import createRoad from './entities/road';
import createDroplets from './entities/droplets';
import State from './State';

const getClassNames = (baseClass: string, ...modifiers: (string | '')[]) => (
    modifiers.reduce(
        (className, modifier) => `${className} ${(modifier ? `${className}--${modifier}` : '')}`,
        baseClass,
    )
);

class App {
    private _metadataView: MetadataView;
    private _entities: Entity[];
    private _element: Element;

    constructor(
        context: CanvasRenderingContext2D,
        element: Element,
        searchForm: SearchFormView,
        metadata: MetadataView,
    ) {
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
        this._element = element;

        searchForm.onNewState = this.onNewState;
    }

    public next() {
        for (const entity of this._entities) {
            entity.next();
        }
    }

    private onNewState = async (state: State) => {
        this.updateRootClassName(state);
        this._metadataView.update(state);

        for (const entity of this._entities) {
            await entity.setState(state);
        }
    }

    private updateRootClassName({ hasGreyClouds }: State) {
        this._element.className = getClassNames('app', hasGreyClouds && 'light');
    }
}

export default App;
