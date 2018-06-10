import RectRenderable from '../RectRenderable';
import Positionable from '../Positionable';

const createStubContext = (): Partial<CanvasRenderingContext2D> => ({
    fillStyle: '',
    fillRect: jest.fn(),
});

/* More tests are ultimately required,
 * but this is merely an example! */
describe('RectRenderable', () => {
    it('should render a filled rectangle with the provided context', () => {
        const context = createStubContext();
        const positionable = new Positionable(0, 0, 1, 1);
        const rectRenderable = new RectRenderable(context as CanvasRenderingContext2D, 'red', positionable);

        rectRenderable.next();

        expect(context.fillStyle).toEqual('red');
        expect(context.fillRect).toHaveBeenCalledTimes(1);
        expect(context.fillRect).toHaveBeenCalledWith(0, 0, 1, 1);
    });
});
