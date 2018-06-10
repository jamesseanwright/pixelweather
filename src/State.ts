import Result from './Result';

class State {
    private _result: Result;

    constructor(result: Result) {
        this._result = result;
    }

    public get hasGreyClouds() {
        return this._result.weather.some(({ main }) => main === 'Rain' || main === 'Thunder');
    }

    public get isRaining() {
        return this._result.weather.some(({ main }) => main === 'Rain');
    }

    public get temp() {
        return this._result.main.temp;
    }

    public get weatherSummary() {
        return this._result.weather.map(({ main }) => main);
    }
}

export default State;
