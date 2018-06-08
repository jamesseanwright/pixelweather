import Moveable from './Moveable';
import Delegate from './Delegate';
import Positionable from './Positionable';

class Loopable implements Delegate {
    private _positionable: Positionable;
    private _moveable: Moveable;
    private _maxX: number;
    private _maxY: number;

    constructor(
        positionable: Positionable,
        moveable: Moveable,
        maxX: number,
        maxY: number,
    ) {
        this._positionable = positionable;
        this._moveable = moveable;
        this._maxX = maxX;
        this._maxY = maxY;
    }

    public next() {
        this.loop('x', this._moveable.xSpeed, this._positionable.width, this._maxX);
        this.loop('y', this._moveable.ySpeed, this._positionable.height, this._maxY);
    }

    private loop(posProp: 'x' | 'y', speed: number, size: number, maxPos: number) {
        if (speed < 0 && this._positionable[posProp] + size < 0) {
            this._positionable[posProp] = maxPos;
        }

        if (speed > 0 && this._positionable[posProp] > maxPos) {
            this._positionable[posProp] = 0 - size;
        }
    }
}

export default Loopable;
