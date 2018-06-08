import Entity from './Entity';

const createCloud = (context: CanvasRenderingContext2D) => new Entity(
    createImageRenderable(context, '/images/cloud.png')
);

export default createCloud;
