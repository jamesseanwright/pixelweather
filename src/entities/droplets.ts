import RectRenderable, { CanvasFill } from '../components/RectRenderable';
import Positionable from '../components/Positionable';
import Moveable from '../components/Moveable';
import Entity from './Entity';
import Loopable from '../components/Loopable';
import AggregateEntity from './AggregateEntity';

const createDroplets = (
    context: CanvasRenderingContext2D,
    fill: CanvasFill,
    ySpeed: number,
    dropletSize: number,
    dropletPadding: number,
) => {
    const droplets = [];
    const screenWidth = context.canvas.width;
    const screenHeight = context.canvas.height;
    const totalSize = dropletSize + dropletPadding;

    for (let i = 0; i < (screenWidth * screenHeight) / totalSize; i++) {
        const x = (i * totalSize) % screenWidth; // TODO: WORLD SPACE!!!
        const y = Math.ceil((i * totalSize) / screenWidth) * totalSize;
        const positionable = new Positionable(x, y, dropletSize, dropletSize);
        const moveable = new Moveable(positionable, 0, ySpeed);
        const loopable = new Loopable(positionable, moveable, 0, context.canvas.height);
        const rectRenderable = new RectRenderable(context, fill, positionable); // TODO, swap RectRenderable args?

        droplets[i] = new Entity(moveable, loopable, rectRenderable);
    }

    const entity = new AggregateEntity(droplets);

    entity.isActive = false;

    entity.onNewState = ({ weather }) => {
        entity.isActive = weather.some(({ main }) => main === 'Rain');
    };

    return entity;
};

export default createDroplets;
