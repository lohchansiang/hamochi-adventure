import { IMapAction } from "../../../../interfaces/IMapAction";
import { IMapEntityConfig, MapEntityType } from "../../../../interfaces/IMapEntityConfig";

export class MEC_NpcRuby implements IMapEntityConfig{
    type: MapEntityType;
    mapObjectKey: string; //
    x: number;
    y: number;
    isFlip: boolean;
    collisionRange: number;
    showCollision?: boolean | undefined;
    label?: string | undefined;
    spawnKey?: string | undefined;
    action?: IMapAction | undefined;
    
    constructor( x: number ){
        this.type = MapEntityType.NPC;
        this.mapObjectKey = 'CharRuby';
        this.x = x;
        this.y = -160;
        this.isFlip = true;
        this.collisionRange = 300;
        this.showCollision = true;
        // this.action = action;
    }
}