import Delegate from './Delegate';
import Positionable from './Positionable';

class ImageRenderable implements Delegate {
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
    private _positionable: Positionable;
    private _image: HTMLImageElement;
    private _hasImageLoaded = false;

    constructor(
        context: CanvasRenderingContext2D,
        positionable: Positionable,
        src: string,
    ) {
        this._context = context;
        this._positionable = positionable;
        this.loadImage(src);
    }

    public next() {
        const { x, y, width, height } = this._positionable;

        if (this._hasImageLoaded) {
            this._context.drawImage(this._image, x, y, width, height);
        }
    }

    public setImage = async (src: string) => {
        await this.loadImage(src);
    }

    private loadImage = async (src: string) => {
        this._hasImageLoaded = false;
        this._image = await ImageRenderable.createImage(src);
        this._hasImageLoaded = true;
    }
}

export default ImageRenderable;
