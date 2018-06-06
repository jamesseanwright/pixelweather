import Moveable from './Moveable';
import Loopable from './Loopable';

// TODO: => ImageRenderable
class ImageSprite extends Loopable {
    // TODO: preload images once and cache
    public static createImage = async (src: string) => (
        new Promise<HTMLImageElement>((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = src;
        })
    )

    private _context: CanvasRenderingContext2D;
    private _image: HTMLImageElement;
    private _hasImageLoaded = false;

    constructor(
        context: CanvasRenderingContext2D,
        src: string,
        x: number,
        y: number,
        width: number,
        height: number,
        xSpeed: number,
        ySpeed: number,
        maxX: number,
    ) {
        super(x, y, width, height, xSpeed, ySpeed, maxX, 0);
        this._context = context;
        this.loadImage(src);
    }

    public next() {
        super.next();

        if (this._hasImageLoaded) {
            this._context.drawImage(
                this._image,
                this.x,
                this.y,
                this.width,
                this.height,
            );
        }
    }

    protected setImage = async (src: string) => {
        this.loadImage(src);
    }

    private loadImage = async (src: string) => {
        this._hasImageLoaded = false;
        this._image = await ImageSprite.createImage(src);
        this._hasImageLoaded = true;
    }
}

export default ImageSprite;
