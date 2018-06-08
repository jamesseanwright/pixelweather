import Entity from './Entity';

class AggregateEntity extends Entity {
    private _entities: Entity[];

    constructor(entities: Entity[]) {
        super();
        this._entities = entities;
    }

    public next() {
        if (this._isActive) {
            for (const entity of this._entities) {
                entity.next();
            }
        }
    }
}

export default AggregateEntity;
