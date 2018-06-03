import ImageSprite from './ImageSprite';
import Result from '../Result';

class Cloud extends ImageSprite {
    public static getImagePath = (isGrey: boolean) => `/images/cloud${isGrey ? '-grey' : ''}.png`;

    constructor(context: CanvasRenderingContext2D, isGrey: boolean, x: number, y: number, xSpeed: number) {
        super(
            context,
            Cloud.getImagePath(isGrey),
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

    public setState(state: Result) {
        super.setState(state);

        const { weather } = state;
        const isGrey = weather.some(({ main }) => main === 'Rain' || main === 'Thunder');
        this.setImage(Cloud.getImagePath(isGrey));
    }
}

export default Cloud;
