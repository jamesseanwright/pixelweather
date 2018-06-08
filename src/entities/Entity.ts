import Delegate from '../components/Delegate';
import Result from '../Result';

class Entity {
    private _delegates: Delegate[];
    private _onNewState = (state: Result) => undefined;

    constructor(...delegates: Delegate[]) {
        this._delegates = delegates;
    }

    public next() {
        for (const delegate of this._delegates) {
            delegate.next();
        }
    }

    public async setState(state: Result) {
        await this._onNewState(state);
    }

    public set onNewState(callback: (state: Result) => void) {
        this._onNewState = callback;
    }
}

export default Entity;
