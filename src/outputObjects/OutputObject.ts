import Result from '../Result';

abstract class OutputObject {
    private _state: Result = {
        weather: [],
        main: {
            temp: 0,
            humidity: 0,
        },
        visibility: 10000,
    }

    public abstract next(): void;

    protected get state() {
        return this._state;
    }

    public setState(newState: Result) {
        this._state = newState;
    }
}

export default OutputObject;
