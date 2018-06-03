import Result from '../Result';

class MetadataView {
    private _element: Element;

    constructor(element: Element) {
        this._element = element;
    }

    public update(state: Result) {
        this._element.innerHTML = `
            <ul class="metadata__summary">
                ${state.weather.map(w => `<li>${w.main}</li>`)}
            </ul>

            <p>${state.main.temp} °C</p>
        `;
    }
}

export default MetadataView;
