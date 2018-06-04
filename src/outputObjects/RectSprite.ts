import Positionable from './Positionable';
import Moveable from './Moveable';
import Result from '../Result';

export type CanvasFill = string | CanvasGradient | CanvasPattern;

// TODO: not really a sprite. Rename (RectRenderable)
class RectSprite extends Moveable {
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
    ) {
        super(x, y, width, height, xSpeed, ySpeed);
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

export default RectSprite;
