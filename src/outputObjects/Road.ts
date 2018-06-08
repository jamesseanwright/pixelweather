import OutputObject from './OutputObject';
import Positionable from './Positionable';
import RectRenderable from './RectRenderable';

class Road extends OutputObject {
    private _context: CanvasRenderingContext2D;
    private _outputObjects: OutputObject[];

    // TODO: world size => pixel projection
    constructor(context: CanvasRenderingContext2D, x: number, y: number) {
        super();

        const { width, height } = context.canvas;

        this._context = context;

        this._outputObjects = [
            new RectRenderable(context, '#b7b1ae', x, y, width, 5, 0, 0, 0),
            new RectRenderable(context, '#282b2a', x, y + 5, width, height - y, 0, 0, 0),
            new RectRenderable(context, 'yellow', x, y + 25, width, 5, 0, 0, 0),
            new RectRenderable(context, 'yellow', x, y + 35, width, 5, 0, 0, 0),
        ];
    }

    public next() {
        for (const outputObject of this._outputObjects) {
            outputObject.next();
        }
    }
}

export default Road;
