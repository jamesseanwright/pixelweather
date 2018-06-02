import ImageSprite from './ImageSprite';

class Cloud extends ImageSprite {
    constructor(context: CanvasRenderingContext2D, isGrey: boolean, x: number, y: number) {
        super(context, `/images/cloud${isGrey ? '-grey' : ''}.png`, x, y, 120, 64, -2, 0); // TODO: rem magic numbers
    }
}

export default Cloud;
