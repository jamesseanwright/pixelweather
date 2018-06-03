import Result from '../Result';

abstract class OutputObject {
    private _state: Result;

    public abstract next(): void;

    protected get state() {
        return this._state;
    }

    public setState(newState: Result) {
        this._state = newState;
    }
}

export default OutputObject;
