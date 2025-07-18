import { IMapAction } from "../../../../interfaces/IMapAction";
import { IMapEntityConfig, MapEntityType } from "../../../../interfaces/IMapEntityConfig";

export class MEC_Portal implements IMapEntityConfig{
    type: MapEntityType;
    mapObjectKey: string;
    x: number;
    y: number;
    isFlip: boolean;
    collisionRange: number;
    showCollision?: boolean | undefined;
    label?: string | undefined;
    spawnKey?: string | undefined;
    action?: IMapAction | undefined;
    
    constructor( x: number, label: string, spawnKey: string, action: IMapAction | undefined ){
        this.type = MapEntityType.INTERACT;
        this.mapObjectKey = 'templePortal';
        this.x = x;
        this.y = -150;
        this.isFlip = false;
        this.collisionRange = 200;
        this.showCollision = true;
        this.label = label;
        this.spawnKey = spawnKey;
        this.action = action;
    }
}