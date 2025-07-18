import { IMapEntityConfig, MapEntityType } from "../../../interfaces/IMapEntityConfig";
import { IMapEnd, MapEndKey, MapEndSide } from "../../../interfaces/IMapEnd"

export class MapEndTempleWall implements IMapEnd{
    key: MapEndKey

    constructor(){
        this.key = MapEndKey.WALL
    }

    wallConfigs(positionX: number, side: MapEndSide): Array<IMapEntityConfig>{
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