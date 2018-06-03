import OutputObject from './OutputObject';

abstract class Positionable extends OutputObject {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;

    constructor(x: number, y: number, width: number, height: number) {
        super();
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    protected get x() {
        return this._x;
    }

    protected set x(value: number) {
        this._x = value;
    }

    protected get y() {
        return this._y;
    }

    protected set y(value: number) {
        this._y = value;
    }

    protected get width() {
        return this._width;
    }

    protected get height() {
        return this._height;
    }
}

export default Positionable;
