import Result from '../Result';
import State from '../State';

class MetadataView {
    private _element: Element;

    constructor(element: Element) {
        this._element = element;
    }

    public update({ temp, weatherSummary }: State) {
        this._element.innerHTML = `
            <ul class="metadata__summary">
                <li class="metadata__summary-item">${temp} °C</li>
                ${weatherSummary.map(w => `<li>${w}</li>`)}
            </ul>
        `;
    }
}

export default MetadataView;
