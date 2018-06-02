import ImageSprite from './ImageSprite';

class Person extends ImageSprite {
    constructor(
        context: CanvasRenderingContext2D,
        image: string,
        x: number,
        y: number,
        width: number,
        height: number,
    ) {
        super(context, image, x, y, width, height, 0, 0);
    }
}

export default Person;
