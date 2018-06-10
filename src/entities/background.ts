import Result from '../Result';
import RectRenderable, { CanvasFill } from '../components/RectRenderable';
import Positionable from '../components/Positionable';
import Entity from './Entity';
import State from '../State';

export type FillPredicate = (state: State) => boolean;
export type FillDelegate = (context: CanvasRenderingContext2D) => CanvasFill;

const createDefaultFill = (context: CanvasRenderingContext2D) => {
    const gradient = context.createLinearGradient(0, 0, 0, context.canvas.width);

    gradient.addColorStop(0, '#f2f8fd');
    gradient.addColorStop(0.8, '#d8ecf9');

    return gradient;
};

// TODO: memoise fills
const fills = new Map<FillPredicate, FillDelegate>([
    [
        ({ isRaining }) => isRaining,
        context => {
            const gradient = context.createLinearGradient(0, 0, 0, context.canvas.width);

            gradient.addColorStop(0, '#4c4c4c');
            gradient.addColorStop(0.8, '#6b6b6b');

            return gradient;
        },
    ],

    [
        () => true, // default fill
        createDefaultFill,
    ],
]);

const getFill = (state: State, context: CanvasRenderingContext2D) => {
    for (const [predicate, delegate] of fills) {
        if (predicate(state)) {
            return delegate(context);
        }
    }

    return 'black';
};

const createBackground = (context: CanvasRenderingContext2D) => {
    const positionable = new Positionable(0, 0, context.canvas.width, context.canvas.height);
    const rectRenderable = new RectRenderable(context, createDefaultFill(context), positionable);
    const entity = new Entity(rectRenderable);

    entity.onNewState = state => {
        rectRenderable.fill = getFill(state, context);
    };

    return entity;
};

export default createBackground;
