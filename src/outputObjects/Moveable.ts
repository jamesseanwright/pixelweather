import Positionable from './Positionable';

class Moveable extends Positionable {
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
}

export default Moveable;
