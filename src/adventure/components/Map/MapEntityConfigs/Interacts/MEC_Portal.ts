import { MapActionInterface } from "../../MapActions/Interface/MapActionInterface";
import MapEntityConfig, { MapEntityType } from "../MapEntityConfig";

export class MEC_Portal implements MapEntityConfig{
    type: MapEntityType;
    mapObjectKey: string;
    x: number;
    y: number;
    isFlip: boolean;
    collisionRange: number;
    showCollision?: boolean | undefined;
    label?: string | undefined;
    spawnKey?: string | undefined;
    action?: MapActionInterface | undefined;
    
    constructor( x: number, label: string, spawnKey: string, action: MapActionInterface | undefined ){
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