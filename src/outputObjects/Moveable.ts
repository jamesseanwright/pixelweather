import Positionable from './Positionable';

class Moveable extends Positionable  {
    private _xSpeed: number;
    private _ySpeed: number;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        xSpeed: number,
        ySpeed: number,
    ) {
        super(x, y, width, height);
        this._xSpeed = xSpeed;
        this._ySpeed = ySpeed;
    }

    public next() {
        this.x += this._xSpeed;
        this.y += this._ySpeed;
    }

    protected get xSpeed() {
        return this._xSpeed;
    }
}

export default Moveable;
