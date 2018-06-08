import Result from '../Result';
import RectRenderable, { CanvasFill } from '../components/RectRenderable';
import Positionable from '../components/Positionable';
import Entity from './Entity';

export type FillPredicate = (state: Result) => boolean;
export type FillDelegate = (context: CanvasRenderingContext2D) => CanvasFill;

const createDefaultFill = (context: CanvasRenderingContext2D) => {
    const gradient = context.createLinearGradient(0, 0, 0, context.canvas.width);

    gradient.addColorStop(0, '#f2f8fd');
    gradient.addColorStop(0.8, '#d8ecf9');

    return gradient;
};

const fills = new Map<FillPredicate, FillDelegate>([
    [
        ({ weather }) => !!weather.find(({ main }) => main === 'Rain'),
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

const createBackground = (context: CanvasRenderingContext2D) => {
    const positionable = new Positionable(0, 0, context.canvas.width, context.canvas.height);
    const rectRenderable = new RectRenderable(context, createDefaultFill(context), positionable);

    return new Entity(rectRenderable);
}

export default createBackground;
