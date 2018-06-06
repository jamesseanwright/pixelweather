import Moveable from './Moveable';

class Loopable extends Moveable {
    private _maxX: number;
    private _maxY: number;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        xSpeed: number,
        ySpeed: number,
        maxX: number,
        maxY: number,
    ) {
        super(x, y, width, height, xSpeed, ySpeed);
        this._maxX = maxX;
        this._maxY = maxY;
    }

    public next() {
        /* Presentation point: having to call super.next
         * to share and preserve behaviour of super class
         * brittle and way harder to test! */
        super.next();
        this.loop('x', this.xSpeed, this.width, this._maxX);
        this.loop('y', this.ySpeed, this.height, this._maxY);
    }

    private loop(posProp: 'x' | 'y', speed: number, size: number, maxPos: number) {
        if (speed < 0 && this[posProp] + size < 0) {
            this[posProp] = maxPos;
        }

        if (speed > 0 && this[posProp] > maxPos) {
            this[posProp] = 0 - size;
        }
    }
}

export default Loopable;
