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
    dropletWidth: number,
    dropletHeight: number,
    dropletPadding: number,
) => {
    const droplets = [];
    const screenWidth = context.canvas.width;
    const screenHeight = context.canvas.height;
    const totalWidth = dropletWidth + dropletPadding;
    const totalHeight = dropletHeight + dropletPadding;

    for (let i = 0; i < (screenWidth * screenHeight) / (totalWidth * totalHeight); i++) {
        const x = (i * totalWidth) % screenWidth; // TODO: WORLD SPACE!!!
        const y = Math.ceil((i * totalWidth) / screenWidth) * totalHeight;
        const positionable = new Positionable(x, y, dropletWidth, dropletHeight);
        const moveable = new Moveable(positionable, 0, ySpeed);
        const loopable = new Loopable(positionable, moveable, 0, context.canvas.height);
        const rectRenderable = new RectRenderable(context, fill, positionable); // TODO, swap RectRenderable args?

        droplets[i] = new Entity(moveable, loopable, rectRenderable);
    }

    const entity = new AggregateEntity(droplets);
    console.log('*******', droplets.length);
    entity.isActive = false;

    entity.onNewState = ({ weather }) => {
        entity.isActive = weather.some(({ main }) => main === 'Rain');
    };

    return entity;
};

export default createDroplets;
