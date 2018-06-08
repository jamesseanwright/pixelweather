import Positionable from '../components/Positionable';
import ImageRenderable from '../components/ImageRenderable';
import Entity from './Entity';

const createPerson = (context: CanvasRenderingContext2D, image: string, x: number, y: number) => {
    const positionable = new Positionable(x, y, 72, 72);
    const imageRenderable = new ImageRenderable(context, positionable, image);

    return new Entity(imageRenderable);
};

export default createPerson;
