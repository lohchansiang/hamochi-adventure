import { MapActionInterface } from "../../MapActions/Interface/MapActionInterface";
import MapEntityConfig, { MapEntityType } from "../MapEntityConfig";

export class MEC_NpcKaty implements MapEntityConfig{
    type: MapEntityType;
    mapObjectKey: string; //
    x: number;
    y: number;
    isFlip: boolean;
    collisionRange: number;
    showCollision?: boolean | undefined;
    label?: string | undefined;
    spawnKey?: string | undefined;
    action?: MapActionInterface | undefined;
    
    constructor( x: number ){
        this.type = MapEntityType.NPC;
        this.mapObjectKey = 'CharKaty';
        this.x = x;
        this.y = -150;
        this.isFlip = true;
        this.collisionRange = 120;
        this.showCollision = true;
        // this.action = action;
    }
}