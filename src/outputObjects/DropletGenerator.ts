import RectRenderable, { CanvasFill } from './RectRenderable';
import OutputObject from './OutputObject';
import Droplet from './Droplet';

const DROPLET_PADDING = 5;

class DropletGenerator extends OutputObject {
    private static createDroplets(
        context: CanvasRenderingContext2D,
        fill: CanvasFill,
        dropletSize: number,
        ySpeed: number,
    ) {
        const droplets = [];
        const screenWidth = context.canvas.width;
        const screenHeight = context.canvas.height;
        const totalSize = dropletSize + DROPLET_PADDING;

        for (let i = 0; i < (screenWidth * screenHeight) / totalSize; i++) {
            const x = (i * totalSize) % screenWidth; // TODO: WORLD SPACE!!!
            const y = Math.ceil((i * totalSize) / screenWidth) * totalSize;

            droplets[i] = new Droplet(context, fill, x, y, dropletSize, ySpeed);
        }

        return droplets;
    }

    private _droplets: Droplet[];

    constructor(
        context: CanvasRenderingContext2D,
        fill: CanvasFill,
        dropletSize: number,
        ySpeed: number,
    ) {
        super();
        this._droplets = DropletGenerator.createDroplets(context, fill, dropletSize, ySpeed);
    }

    public next() {
        if (this.state.rain) {
            for (const droplet of this._droplets) {
                droplet.next();
            }
        }
    }
}

export default DropletGenerator;
