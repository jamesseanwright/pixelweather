import Moveable from './Moveable';

const createImage = (src: string) => {
    const image = new Image();
    image.src = src;
    return image;
};

class ImageSprite extends Moveable {
    private _context: CanvasRenderingContext2D;
    private _image: HTMLImageElement;

    constructor(
        context: CanvasRenderingContext2D,
        src: string,
        x: number,
        y: number,
        width: number,
        height: number,
        xSpeed: number,
        ySpeed: number,
    ) {
        super(x, y, width, height, xSpeed, ySpeed);
        this._context = context;
        this._image = createImage(src);
    }

    public next() {
        super.next();

        this._context.drawImage(
            this._image,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }
}

export default ImageSprite;
