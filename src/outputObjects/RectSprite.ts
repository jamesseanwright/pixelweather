import Positionable from './Positionable';
import Moveable from './Moveable';
import Renderable from './Renderable';

export type CanvasFill = string | CanvasGradient | CanvasPattern;

class RectSprite extends Moveable implements Renderable {
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
