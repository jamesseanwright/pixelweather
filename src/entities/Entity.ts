import Delegate from '../components/Delegate';

class Entity {
    private _delegates: Delegate[];

    constructor(delegates: Delegate[]) {
        this._delegates = delegates;
    }

    public next() {
        for (const delegate of this._delegates) {
            delegate.next();
        }
    }
}

export default Entity;
