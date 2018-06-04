import RectSprite, { CanvasFill } from './RectSprite';
import OutputObject from './OutputObject';

const DROPLET_PADDING = 5;

class DropletGenerator extends OutputObject {
    private _context: CanvasRenderingContext2D;
    private _fill: CanvasFill;
    private _screenWidth: number; // TODO: world space
    private _screenHeight: number; // TODO: world space
    private _dropletWidth: number;
    private _dropletHeight: number;
    private _xSpeed: number;
    private _ySpeed: number;

    constructor(
        context: CanvasRenderingContext2D,
        fill: CanvasFill,
        dropletWidth: number,
        dropletHeight: number,
        xSpeed: number,
        ySpeed: number,
    ) {
        super();

        this._context = context;
        this._fill = fill;
        this._screenWidth = context.canvas.width;
        this._screenHeight = context.canvas.height;
        this._dropletWidth = dropletWidth;
        this._dropletHeight = dropletHeight;
        this._xSpeed = xSpeed;
        this._ySpeed = ySpeed;
    }

    public next() {
        this._context.fillStyle = this._fill;

        const width = this._dropletWidth + DROPLET_PADDING;
        const height = this._dropletHeight + DROPLET_PADDING;

        for (let x = 0; x < this._screenWidth / width; x += width) {
            for (let y = 0; y < this._screenHeight / height; y += height) {
                this._context.fillRect(x, y, this._dropletWidth, this._dropletHeight);
            }
        }
    }
}

export default DropletGenerator;
