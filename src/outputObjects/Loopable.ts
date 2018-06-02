import Moveable from './Moveable';

class Loopable extends Moveable {
    private _maxX: number;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        xSpeed: number,
        ySpeed: number,
        maxX: number,
    ) {
        super(x, y, width, height, xSpeed, ySpeed);
        this._maxX = maxX;
    }

    public next() {
        /* Presentation point: having to call super.next
         * to share and preserve behaviour of super class
         * brittle and way harder to test! */
        super.next();

        if (this.xSpeed < 0 && this.x + this.width < 0) {
            this.x = this._maxX;
        }

        if (this.xSpeed > 0 && this.x > this._maxX) {
            this.x = 0 - this.width;
        }
    }
}

export default Loopable;
