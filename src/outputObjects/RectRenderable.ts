import Positionable from './Positionable';
import Moveable from './Moveable';
import Result from '../Result';
import Loopable from './Loopable';

export type CanvasFill = string | CanvasGradient | CanvasPattern;

class RectRenderable extends Loopable {
    private _context: CanvasRenderingContext2D;
    private _fill: string | CanvasGradient | CanvasPattern;

    constructor(
        context: CanvasRenderingContext2D,
        fill: CanvasFill,
        x: number,
        y: number,
        width: number,
        height: number,
        xSpeed: number,
        ySpeed: number,
        maxY: number,
    ) {
        super(x, y, width, height, xSpeed, ySpeed, 0, maxY);
        this._context = context;
        this._fill = fill;
    }

    public next() {
        super.next();

        this._context.fillStyle = this._fill;

        this._context.fillRect(
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }

    protected get context() {
        return this._context;
    }

    protected set fill(fill: CanvasFill) {
        this._fill = fill;
    }
}

export default RectRenderable;
