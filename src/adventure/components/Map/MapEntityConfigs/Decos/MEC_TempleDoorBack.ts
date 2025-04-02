import { MapActionInterface } from "../../MapActions/Interface/MapActionInterface";
import MapEntityConfig, { MapEntityType } from "../MapEntityConfig";

export class MEC_TempleDoorBack implements MapEntityConfig{
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
    
    constructor( x: number, isFlip: boolean = false ){
        this.type = MapEntityType.DECO;
        this.mapObjectKey = 'templeDoorBack';
        this.x = x;
        this.y = 0;
        this.isFlip = isFlip;
        this.collisionRange = 0;
        this.showCollision = false;
    }
}