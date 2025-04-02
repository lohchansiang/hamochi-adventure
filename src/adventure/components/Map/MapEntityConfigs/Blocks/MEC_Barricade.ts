import { MapActionInterface } from "../../MapActions/Interface/MapActionInterface";
import MapEntityConfig, { MapEntityType } from "../MapEntityConfig";

export class MEC_Barricade implements MapEntityConfig{
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
    
    constructor( x: number ){
        this.type = MapEntityType.BLOCK;
        this.mapObjectKey = 'baricade';
        this.x = x;
        this.y = -60;
        this.isFlip = false;
        this.collisionRange = 0;
        this.showCollision = false;
    }
}