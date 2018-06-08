import Delegate from './Delegate';
import Positionable from './Positionable';

class Moveable implements Delegate {
    private _positionable: Positionable;
    private _xSpeed: number;
    private _ySpeed: number;

    constructor(
        positionable: Positionable,
        xSpeed: number,
        ySpeed: number,
    ) {
        this._positionable = positionable;
        this._xSpeed = xSpeed;
        this._ySpeed = ySpeed;
    }

    public next() {
        this._positionable.x += this._xSpeed;
        this._positionable.y += this._ySpeed;
    }

    public get xSpeed() {
        return this._xSpeed;
    }

    public get ySpeed() {
        return this._ySpeed;
    }
}

export default Moveable;
