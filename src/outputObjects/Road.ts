import OutputObject from './OutputObject';
import Positionable from './Positionable';
import RectSprite from './RectSprite';

class Road implements OutputObject {
    private _context: CanvasRenderingContext2D;
    private _outputObjects: OutputObject[];

    // TODO: world size => pixel projection
    constructor(context: CanvasRenderingContext2D, x: number, y: number) {
        const { width, height } = context.canvas;

        this._context = context;

        this._outputObjects = [
            new RectSprite(context, '#b7b1ae', x, y, width, 5, 0, 0),
            new RectSprite(context, '#282b2a', x, y + 5, width, height - y, 0, 0),
            new RectSprite(context, 'yellow', x, y + 25, width, 5, 0, 0),
            new RectSprite(context, 'yellow', x, y + 35, width, 5, 0, 0),
        ];
    }

    public next() {
        for (const outputObject of this._outputObjects) {
            outputObject.next();
        }
    }
}

export default Road;
