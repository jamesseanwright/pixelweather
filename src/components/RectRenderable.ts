import Positionable from './Positionable';
import Result from '../Result';
import Delegate from './Delegate';

export type CanvasFill = string | CanvasGradient | CanvasPattern;

class RectRenderable implements Delegate {
    private _positionable: Positionable;
    private _context: CanvasRenderingContext2D;
    private _fill: string | CanvasGradient | CanvasPattern;

    constructor(
        context: CanvasRenderingContext2D,
        fill: CanvasFill,
        positionable: Positionable,
    ) {
        this._context = context;
        this._fill = fill;
        this._positionable = positionable;
    }

    public next() {
        const { x, y, width, height } = this._positionable;

        this._context.fillStyle = this._fill;
        this._context.fillRect(x, y, width, height);
    }
}

export default RectRenderable;
