import RectRenderable, { CanvasFill } from './RectRenderable';

class Droplet extends RectRenderable {
    constructor(
        context: CanvasRenderingContext2D,
        fill: CanvasFill,
        x: number,
        y: number,
        size: number,
        ySpeed: number,
    ) {
        super(context, fill, x, y, size, size, 0, ySpeed, context.canvas.height);
    }
}

export default Droplet;
