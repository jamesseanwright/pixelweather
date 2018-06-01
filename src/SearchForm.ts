import Result from './Result';

type ResultCallback = (result: Result) => void;

class SearchForm {
    private _searchInput: HTMLInputElement;
    private _onResult = (result: Result) => undefined;

    constructor(form: HTMLFormElement) {
        form.addEventListener('submit', this.search);
    }

    public set onResult(callback: ResultCallback) {
        this._onResult = callback;
    }

    private async search(e: Event) {
        e.preventDefault();

        const { value } = this._searchInput;
        const response = await fetch(`/api/weather/${value}`);
        const result = await response.json();

        this._onResult(result);
    }
}

export default SearchForm;
