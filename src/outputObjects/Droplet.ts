import RectRenderable, { CanvasFill } from './RectRenderable';

class Droplet extends RectRenderable {
    constructor(
        context: CanvasRenderingContext2D,
        fill: CanvasFill,
        x: number,
        y: number,
        width: number,
        height: number,
        ySpeed: number,
    ) {
        super(context, fill, x, y, width, height, 0, ySpeed, context.canvas.height);
    }
}

export default Droplet;
