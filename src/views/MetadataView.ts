import Result from '../Result';
import State from '../State';

const getClassNames = (baseClass: string, ...modifiers: (string | '')[]) => (
    modifiers.reduce(
        (className, modifier) => `${className} ${(modifier ? `${className}--${modifier}` : '')}`,
        baseClass,
    )
);

class MetadataView {
    private _element: Element;

    constructor(element: Element) {
        this._element = element;
    }

    public update({ temp, weatherSummary, hasGreyClouds }: State) {
        this._element.innerHTML = `
            <ul class="${getClassNames('metadata__summary', hasGreyClouds && 'light')}">
                <li>${temp} °C</li>
                ${weatherSummary.map(w => `<li>${w}</li>`)}
            </ul>
        `;
    }
}

export default MetadataView;
