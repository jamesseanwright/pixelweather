import Result from './Result';

class Metadata {
    private _element: Element;

    constructor(element: Element) {
        this._element = element;
    }

    public update(state: Result) {
        const weather = (state.weather || []).slice(0, 1);

        this._element.innerHTML = `
            ${weather.map(w => `<p>${w.description}</p>`)}
        `;
    }
}

export default Metadata;
