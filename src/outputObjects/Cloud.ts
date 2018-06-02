import ImageSprite from './ImageSprite';

class Cloud extends ImageSprite {
    constructor(context: CanvasRenderingContext2D, isGrey: boolean, x: number, y: number, xSpeed: number) {
        super(
            context,
            `/images/cloud${isGrey ? '-grey' : ''}.png`,
            x,
            y,
            120,
            64,
            xSpeed,
            0,
            context.canvas.width,
        ); // TODO: rem magic numbers
        /* Presentation point - inheriting from new base class
         * to acquire new behaviour results in breaking change
         * to required parameters. Also receiving too many params
         */
    }
}

export default Cloud;
