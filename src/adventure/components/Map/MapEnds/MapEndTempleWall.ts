import MapEntityConfig, { MapEntityType } from "../MapEntityConfigs/MapEntityConfig";
import { MapEndInterface, MapEndKey, MapEndSide } from "./Interface/MapEndInterface"

export class MapEndTempleWall implements MapEndInterface{
    key: MapEndKey

    constructor(){
        this.key = MapEndKey.WALL
    }

    wallConfigs(positionX: number, side: MapEndSide): Array<MapEntityConfig>{
        let offset: number = 125; // 
        
        let x: number = positionX - offset;
        let isFlip: boolean = true;
        if( side == MapEndSide.RIGHT ){
            x = positionX + offset;
            isFlip = false;
        }

        return [
            {
                type: MapEntityType.DECO,
                mapObjectKey: 'templeWall',
                x: x,
                y: 0,
                isFlip: isFlip,
                collisionRange: 0,
            }
        ];
    }
}