import Positionable from './Positionable';
import OutputObject from './OutputObject';

class Moveable extends Positionable implements OutputObject {
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
}

export default Moveable;
