import RectRenderable, { CanvasFill } from './RectRenderable';
import OutputObject from './OutputObject';
import Droplet from './Droplet';

const DROPLET_PADDING = 5;

class DropletGenerator extends OutputObject {
    private static createDroplets(
        context: CanvasRenderingContext2D,
        fill: CanvasFill,
        dropletWidth: number,
        dropletHeight: number,
        ySpeed: number,
    ) {
        const droplets = [];
        const screenWidth = context.canvas.width;
        const screenHeight = context.canvas.height;
        const totalDropletWidth = dropletWidth + DROPLET_PADDING;
        const totalDropletHeight = dropletHeight + DROPLET_PADDING;
        const totalSpace = (screenWidth + totalDropletWidth) * (screenHeight + totalDropletHeight);

        for (let i = 0; i < totalSpace / (totalDropletWidth * totalDropletHeight); i++) {
            const x = (i * totalDropletWidth) % screenWidth; // TODO: WORLD SPACE!!!
            const y = Math.floor((i * totalDropletWidth) / screenWidth) * totalDropletHeight;

            droplets[i] = new Droplet(context, fill, x, y, dropletWidth, dropletHeight, ySpeed);
        }

        return droplets;
    }

    private _droplets: Droplet[];

    constructor(
        context: CanvasRenderingContext2D,
        fill: CanvasFill,
        dropletWidth: number,
        dropletHeight: number,
        ySpeed: number,
    ) {
        super();
        this._droplets = DropletGenerator.createDroplets(context, fill, dropletWidth, dropletHeight, ySpeed);
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
