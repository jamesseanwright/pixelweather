import Positionable from './Positionable';
import Renderable from './Renderable';

class Moveable extends Positionable implements Renderable {
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

    public render() {
        this.x += this._xSpeed;
        this.y += this._ySpeed;
    }
}

export default Moveable;
