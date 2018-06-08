import RectRenderable, { CanvasFill } from './RectRenderable';
import Result from '../Result';
import { create } from 'domain';

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

class Background extends RectRenderable {
    constructor(context: CanvasRenderingContext2D) {
        super(context, createDefaultFill(context), 0, 0, context.canvas.width, context.canvas.height, 0, 0, 0);
    }

    public setState(state: Result) {
        super.setState(state);
        this.fill = this.getFill(state);
    }

    private getFill(state: Result) {
        for (const [predicate, delegate] of fills) {
            if (predicate(state)) {
                return delegate(this.context);
            }
        }

        return 'black';
    }
}

export default Background;
