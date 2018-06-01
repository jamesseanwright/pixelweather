import Positionable from './Positionable';
import Moveable from './Moveable';

export type CanvasFill = string | CanvasGradient | CanvasPattern;

abstract class RectSprite extends Moveable {
    private _context: CanvasRenderingContext2D;
    private _fill: string | CanvasGradient | CanvasPattern;

    constructor(
        context: CanvasRenderingContext2D,
        fill: CanvasFill,
        x: number,
        y: number,
        width: number,
        height: number,
    ) {
        super(x, y, width, height, 0, 0);
        this._context = context;
        this._fill = fill;
    }

    public render() {
        this._context.fillStyle = this._fill;

        this._context.fillRect(
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }
}

export default RectSprite;
