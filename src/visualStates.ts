import Result from './Result';
import OutputObject from './outputObjects/OutputObject';

export type OutputObjects = Map<string, OutputObject[]>;
export type StatePredicate = (state: Result) => boolean;
export type StateDelegate = (state: Result, currentOutputObjects: OutputObjects) => OutputObjects;

const visualStates = new Map<StatePredicate, StateDelegate>([
    [
        ({ visibility }) => visibility > 8000,
        (state, outputObjects) => outputObjects,
    ],

    [
        ({ weather }) => !!weather.find(w => w.main === 'Drizzle'),
        (state, outputObjects) => outputObjects,
    ],
]);

const getVisualState = (state: Result, currentOutputObjects: Map<string, OutputObject[]>) => {
    let newOutputObjects = currentOutputObjects;

    for (const [predicate, delegate] of visualStates) {
        if (predicate(state)) {
            newOutputObjects = delegate(state, newOutputObjects);
        }
    }

    return newOutputObjects;
};
