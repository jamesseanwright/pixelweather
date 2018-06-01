abstract class Positionable {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    protected get x() {
        return this._x;
    }

    protected get y() {
        return this._y;
    }

    protected get width() {
        return this._width;
    }

    protected get height() {
        return this._height;
    }
}

export default Positionable;
