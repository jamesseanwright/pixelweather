import Result from '../Result';
import State from '../State';

type StateCallback = (state: State) => void;

class SearchFormView {
    private _searchInput: HTMLInputElement;
    private _onState = (state: State) => undefined;

    constructor(form: HTMLFormElement) {
        this._searchInput = form.querySelector('.search-form__input');
        form.addEventListener('submit', this.search);
    }

    public set onNewState(callback: StateCallback) {
        this._onState = callback;
    }

    /* Ideally, the fetch call and parsing
     * would sit outside of this view class */
    private search = async (e: Event) => {
        e.preventDefault();

        const { value } = this._searchInput;
        const response = await fetch(`/api/weather/${value}`);
        const result: Result = await response.json();

        await this._onState(new State(result));
    }
}

export default SearchFormView;
