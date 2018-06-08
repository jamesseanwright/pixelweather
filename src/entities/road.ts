import RectRenderable from '../components/RectRenderable';
import Positionable from '../components/Positionable';
import Entity from './Entity';

const createPavement = (context: CanvasRenderingContext2D, x: number, y: number) => new RectRenderable(
    context,
    '#b7b1ae',

    new Positionable(
        x,
        y,
        context.canvas.width,
        5,
    ),
);

const createBase = (context: CanvasRenderingContext2D, x: number, y: number) => new RectRenderable(
    context,
    '#282b2a',

    new Positionable(
        x,
        y + 5,
        context.canvas.width,
        context.canvas.height - 5,
    ),
);

const createLine = (context: CanvasRenderingContext2D, x: number, y: number) => new RectRenderable(
    context,
    'yellow',

    new Positionable(
        x,
        y,
        context.canvas.width,
        5,
    ),
);

const createRoad = (context: CanvasRenderingContext2D, x: number, y: number) => new Entity(
    createPavement(context, x, y),
    createBase(context, x, y),
    createLine(context, x, y + 25),
    createLine(context, x, y + 35),
);

export default createRoad;
