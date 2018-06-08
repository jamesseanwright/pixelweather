import Entity from './Entity';
import Positionable from '../components/Positionable';
import ImageRenderable from '../components/ImageRenderable';
import Moveable from '../components/Moveable';
import Loopable from '../components/Loopable';

const createCloud = (context: CanvasRenderingContext2D, x: number, y: number, xSpeed: number) => {
    const positionable = new Positionable(x, y, 120, 64);
    const moveable = new Moveable(positionable, xSpeed, 0);
    const loopable = new Loopable(positionable, moveable, context.canvas.width, context.canvas.height);
    const imageRenderable = new ImageRenderable(context, positionable, '/images/cloud.png');
    const entity = new Entity(moveable, loopable, imageRenderable);

    entity.onNewState = async ({ weather }) => {
        const isGrey = weather.some(({ main }) => main === 'Rain' || main === 'Thunder');
        await imageRenderable.setImage(`/images/cloud${isGrey ? '-grey' : ''}.png`);
    };

    return entity;
};

export default createCloud;
