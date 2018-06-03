import Result from './Result';
import OutputObject from './outputObjects/OutputObject';

export type StatePredicate = (state: Result) => boolean;
export type StateDelegate = (state: Result) => OutputObject[];

const visualStates = new Map<StatePredicate, StateDelegate>([

]);

const getVisualState = (state: Result) => {
    for (const [predicate, delegate] of visualStates) {
        if (predicate(state)) {
            return delegate(state);
        }
    }

    return [];
};
