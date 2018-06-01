import RectSprite, { CanvasFill } from './RectSprite';

class Background extends RectSprite {
    public static clearSky(context: CanvasRenderingContext2D): Background {
        const gradient = context.createLinearGradient(0, 0, 0, context.canvas.width);

        gradient.addColorStop(0, '#f2f8fd');
        gradient.addColorStop(0.8, '#d8ecf9');

        return new Background(context, gradient);
    }

    constructor(context: CanvasRenderingContext2D, fill: CanvasFill) {
        super(context, fill, 0, 0, context.canvas.width, context.canvas.height, 0, 0);
    }
}

export default Background;
