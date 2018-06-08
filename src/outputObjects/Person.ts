import ImageRenderable from './ImageRenderable';

class Person extends ImageRenderable {
    constructor(context: CanvasRenderingContext2D, image: string, x: number, y: number) {
        super(context, image, x, y, 72, 72, 0, 0, 0);
    }
}

export default Person;
