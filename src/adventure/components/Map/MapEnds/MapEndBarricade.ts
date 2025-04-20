import { MEC_Barricade } from "../MapEntityConfigs/Blocks/MEC_Barricade";
import MapEntityConfig from "../MapEntityConfigs/MapEntityConfig";
import { MapEndInterface, MapEndKey, MapEndSide } from "./Interface/MapEndInterface"

export class MapEndBarricade implements MapEndInterface{
    key: MapEndKey

    constructor(){
        this.key = MapEndKey.WALL
    }

    wallConfigs(positionX: number, side: MapEndSide): Array<MapEntityConfig>{
        let offset: number = 125; // 
        
        let x: number = positionX - offset
        if( side == MapEndSide.RIGHT ){
            x = positionX + offset
        }

        return [
            new MEC_Barricade(x)
        ];
    }
}